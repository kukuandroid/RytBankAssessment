// app/(tabs)/home/_layout.tsx
import { Stack } from 'expo-router';

export default function HomeStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="Transfer/index" options={{ title: 'Transfer' }} />
      <Stack.Screen name="Transfer/TransferDetail" options={{ title: 'Transfer Detail' }} />
      <Stack.Screen name="Profile" options={{ title: 'My Profile' }} />
    </Stack>
  );
}