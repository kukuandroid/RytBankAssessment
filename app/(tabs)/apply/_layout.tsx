// app/(tabs)/apply/_layout.tsx
import { Stack } from 'expo-router';

export default function ApplyStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Apply Home' }} />
      <Stack.Screen name="apply_detail" options={{ title: 'Apply Detail' }} />
    </Stack>
  );
}