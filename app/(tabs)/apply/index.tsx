// app/(tabs)/apply/index.tsx
import { router } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ApplyHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apply Home Screen</Text>
      <Button
        title="Go to Apply Detail"
        onPress={() => router.push('/apply/ApplyDetail')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});