import * as Contacts from 'expo-contacts';
import React, { useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const ContactItem = (item: Contacts.Contact) => (
  <View style={styles.item}>
    <Image source={{ uri: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg" }} style={styles.avatar} />
    <View style={styles.info}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.phone}>{item.company}</Text>
    </View>
  </View>
);

export default function ContactList() {

  const [contacts, setContacts] = React.useState<Contacts.Contact[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.FirstName],
        });
        console.log("data", data)

        if (data.length > 0) {
          setContacts(data)
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id ?? ''}
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
