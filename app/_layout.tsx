// app/_layout.tsx
import { Stack } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { AppProviders, useAuth } from '../context/AuthContext';

export default function RootLayout() {
  return (
    <AppProviders> {/* Wrap with AppProviders which includes QueryClientProvider and AuthProvider */}
      <RootLayoutNav />
    </AppProviders>
  );
}

function RootLayoutNav() {
  const { isAuthenticated, isLoadingAuth } = useAuth(); // Get authentication state
  if (isLoadingAuth) {
    // Render a splash screen or loading indicator while authentication status is being checked
    return <ActivityIndicator size="large" color="#000" />
  }

  return (
    <Stack key={isAuthenticated ? 'auth' : 'guest'}>
      {isAuthenticated ? (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )}
      {/* Only show +not-found for unmatched routes, not as a default */}
    </Stack>
  );
}
