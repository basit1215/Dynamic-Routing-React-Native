// import { View, Text, ActivityIndicator } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { Link } from 'expo-router';

// interface Item {
//   firstName: string;
//   lastName: string;
//   id: number;
// }

// const Index = () => {
//   const [users, setUsers] = useState<null | Item[]>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://dummyjson.com/users')
//       .then(res => res.json())
//       .then(json => {
//         console.log(json.users);
//         setUsers(json.users);
//       })
//       .catch(err => {
//         console.log(err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <View >
//       {loading ? (
//         <ActivityIndicator size={'large'} color="orange" />
//       ) : (
//         users && users.map((item: Item) => (
//           <View key={item.id} >
//             <Link href={`/details/${item.id}`}>
//               <Text >
//                 {item.firstName + " " + item.lastName}
//               </Text>
//             </Link>
//           </View>
//         ))
//       )}
//     </View>
//   );
// }

// export default Index

























import { View, Text, ActivityIndicator, StyleSheet , ScrollView } from 'react-native';
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
    <ScrollView>
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} color="orange" />
      ) : (
        users && users.map((item: Item) => (
          <View key={item.id} style={styles.userItem}>
            <Link href={`/details/${item.id}`}>
              <Text style={styles.userName}>
                {item.firstName + " " + item.lastName}
              </Text>
            </Link>
          </View>
        ))
      )}
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6', // light gray
  },
  userItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db', // gray
    width: '100%',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e40af', // blue
  },
});

export default Index