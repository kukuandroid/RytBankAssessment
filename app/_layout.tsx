// app/_layout.tsx
import { Stack } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { AppProviders, useAuth } from './context/AuthContext';

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

  console.log("🚀 ~ isAuthenticated ~ isAuthenticated:", isAuthenticated)
  return (
    <Stack key={isAuthenticated ? 'auth' : 'guest'}>
      {isAuthenticated ? (
        // If authenticated, show the tabs
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        // If not authenticated, show the auth stack
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )}
      {/* Optionally, you can have global modals or other screens here that overlay everything */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}