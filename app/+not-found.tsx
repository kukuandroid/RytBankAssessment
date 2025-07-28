import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>!!!!!</Text>
      <Text style={styles.message}>Page Not Found</Text>
      <Text style={styles.subMessage}>The route you requested does not exist.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#e53e3e',
    marginBottom: 12,
  },
  message: {
    fontSize: 22,
    color: '#1a202c',
    marginBottom: 8,
  },
  subMessage: {
    fontSize: 16,
    color: '#718096',
  },
});
