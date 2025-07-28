// context/AuthContext.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { createContext, useContext } from 'react';
import { apiFetch } from '../utils/API';

// -----------------------------------------------------------------------------
// Initialize QueryClient
// -----------------------------------------------------------------------------
const queryClient = new QueryClient();

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
interface User {
  id: string;
  name: string;
  // Add other user properties
}

interface AuthContextType {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isLoadingAuth: boolean;
  loginMutation: ReturnType<typeof useMutation<any, Error, { username: string; password: string }>>;
  logoutMutation: ReturnType<typeof useMutation<any, Error, void>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// -----------------------------------------------------------------------------
// AuthProvider
// -----------------------------------------------------------------------------
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClientInstance = useQueryClient();

  // Query to get and persist authentication state (token and user data)
  // This query will also handle initial token loading from AsyncStorage
  const { data: authData, isLoading: isLoadingAuth } = useQuery<{ token: string | null; user: User | null }, Error>({
    queryKey: ['auth'],
    queryFn: async () => {
      const storedToken = await AsyncStorage.getItem('userToken');
      let storedUser = null;
      if (storedToken) {
        try {
          // In a real app, you might decode the JWT or fetch user data based on the token
          // For this fake backend, we'll simulate fetching user info if a token exists
          const userData = await apiFetch('/protected'); // Example: fetch user info with token
          storedUser = userData.user;
        } catch (error) {
          console.error("Failed to re-authenticate with stored token:", error);
          await AsyncStorage.removeItem('userToken'); // Clear invalid token
        }
      }
      return { token: storedToken, user: storedUser };
    },
    staleTime: Infinity, // Keep auth data fresh indefinitely unless explicitly invalidated
  });

  const token = authData?.token || null;
  const user = authData?.user || null;
  const isAuthenticated = !!token;

  // Login Mutation
  const loginMutation = useMutation<any, Error, { username: string; password: string }>({
    mutationFn: async ({ username, password }) => {
      const response = await apiFetch('/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });
      return response;
    },
    onSuccess: async (data) => {
      await AsyncStorage.setItem('userToken', data.token);
      // Invalidate the 'auth' query to refetch and update global state
      queryClientInstance.invalidateQueries({ queryKey: ['auth'] });
      // Optionally pre-set query data if you get user info directly from login response
      queryClientInstance.setQueryData(['auth'], { token: data.token, user: data.user });
    },
    onError: (error) => {
      console.error("Login mutation error:", error);
      // You can handle UI feedback for login errors here
    },
  });

  // Logout Mutation
  const logoutMutation = useMutation<any, Error, void>({
    mutationFn: async () => {
      // In a real app, you might hit a logout endpoint
      // await apiFetch('/logout', { method: 'POST' });
      return {}; // Simulate success
    },
    onSuccess: async () => {
      await AsyncStorage.removeItem('userToken');
      // Invalidate all queries to clear user-specific data
      queryClientInstance.invalidateQueries();
      // Explicitly set auth data to null
      queryClientInstance.setQueryData(['auth'], { token: null, user: null });
    },
    onError: (error) => {
      console.error("Logout mutation error:", error);
    },
  });

  const contextValue: AuthContextType = {
    token,
    user,
    isAuthenticated,
    isLoadingAuth,
    loginMutation,
    logoutMutation,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// -----------------------------------------------------------------------------
// Root App Provider for React Query
// -----------------------------------------------------------------------------
export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </QueryClientProvider>
  );
};