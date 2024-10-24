// import { View, Text, ActivityIndicator } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { useRouter ,useLocalSearchParams } from 'expo-router';

// const Details = () => { // Assume id is passed as a prop
//     const [userData, setUserData] = useState<any>(null);
//     const [loading, setLoading] = useState(true);
//     const { id } = useLocalSearchParams()

//     useEffect(() => {
//         // Fetch user data based on the ID
//         fetch(`https://dummyjson.com/users/${id}`)
//             .then(res => res.json())
//             .then(json => {
//                 setUserData(json);
//                 console.log(json)
//             })
//             .catch(err => {
//                 console.error(err);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, [id]);

//     return (
//         <View>
//             <Text>Details for User ID: {id}</Text>
//             {loading ? (
//                 <ActivityIndicator size={'large'} color="orange" />
//             ) : userData ? (
//                 <View>
//                     <Text>Name: {userData.firstName + " " + userData.lastName}</Text>
//                 </View>
//             ) : (
//                 <Text>User not found</Text>
//             )}
//         </View>
//     );
// };

// export default Details





























import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';

const Details = () => {
    const [userData, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const { id } = useLocalSearchParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(json => {
                setUserData(json);
                console.log(json);
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Details for User ID: {id}</Text>
            {loading ? (
                <ActivityIndicator size={'large'} color="orange" />
            ) : userData ? (
                <View style={styles.userInfo}>
                    <Text style={styles.label}>Name:</Text>
                    <Text style={styles.value}>{userData.firstName} {userData.lastName}</Text>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{userData.email}</Text>
                    <Text style={styles.label}>Phone:</Text>
                    <Text style={styles.value}>{userData.phone}</Text>
                    <Text style={styles.label}>Address:</Text>
                    <Text style={styles.value}>{userData.address?.street} {userData.address?.city}, {userData.address?.zipcode}</Text>
                </View>
            ) : (
                <Text style={styles.error}>User not found</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f3f4f6', // light gray
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1e40af', // blue
    },
    userInfo: {
        backgroundColor: '#ffffff', // white background for user info
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000', // shadow effect
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Android shadow effect
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#4b5563', // gray
        marginTop: 10,
    },
    value: {
        fontSize: 18,
        color: '#374151', // darker gray
    },
    error: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Details;
