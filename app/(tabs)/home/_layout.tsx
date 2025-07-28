// app/(tabs)/home/_layout.tsx
import { Stack } from 'expo-router';

export default function HomeStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="TransferDetail" options={{ title: 'Transfer Detail' }} />
      <Stack.Screen name="Profile" options={{ title: 'Transfer Detail' }} />
    </Stack>
  );
}