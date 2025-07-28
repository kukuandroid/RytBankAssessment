import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const contacts = [
  { id: '1', name: 'Fatimah Azzahrah', phone: '+62 812-3456-7890', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: '2', name: 'Ahmad Fauzi', phone: '+62 813-9876-5432', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: '3', name: 'Siti Nurhaliza', phone: '+62 811-2233-4455', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
];

const ContactItem = ({ name, phone, avatar }: { name: string; phone: string; avatar: string }) => (
  <View style={styles.item}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <View style={styles.info}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
  </View>
);

export default function ContactList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ContactItem {...item} />}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1E293B',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    backgroundColor: '#e2e8f0',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#334155',
  },
  phone: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 2,
  },
});
