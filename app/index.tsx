import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Link } from 'expo-router';

interface Item {
  firstName: string;
  lastName: string;
  id: number;
}

const Index = () => {
  const [users, setUsers] = useState<null | Item[]>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(json => {
        console.log(json.users);
        setUsers(json.users);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (

    <View style={styles.container}>


      <View style={{
        borderBottomWidth: 2,
        borderColor: '#386504'
      }}>
        <Text style={{
          fontSize: 24,
          color: '#386504',
          fontWeight: 'bold',
          textAlign: 'center',
          paddingBottom: 25,

        }}>
          All Users
        </Text>
      </View>

      <ScrollView>
        {loading ? (
          <ActivityIndicator size={'large'} color="orange" />
        ) : (
          users &&
          users.map((item: Item) => (
            <View key={item.id} style={styles.userItem}>
              <View style={styles.row}>
                <Text style={styles.userName}>
                  {item.firstName + " " + item.lastName}
                </Text>

                <Link href={`/details/${item.id}`} style={styles.linkButton}>
                  <Text style={styles.linkText}>Details</Text>
                </Link>
              </View>
            </View>
          ))
        )}
      </ScrollView >
    </View>


  )

}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#6ea52d'
  },
  userItem: {
    paddingVertical: 8,
    marginBottom: 10,
    marginTop: 14,
    backgroundColor: '#6ea52d',
    paddingHorizontal: 3,
    borderRadius: 10,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'white',
    shadowColor: '#3ca740',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 1,
    paddingRight: 7,

  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  linkButton: {
    backgroundColor: '#94e931',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  linkText: {
    color: '#386504',
    fontWeight: 'bold',
  },
});

export default Index