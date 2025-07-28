import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../../context/AuthContext';

const Profile = () => {
  const { user, logoutMutation } = useAuth();
  const name = user?.name || 'Unknown User';
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn2.iconfinder.com/data/icons/avatars-60/5985/24-Maid-128.png' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.editButton} onPress={() => logoutMutation.mutate()}>
        <Text style={styles.editButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
    padding: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 24,
    backgroundColor: '#e2e8f0',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 24,
  },
  editButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 32,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Profile;
