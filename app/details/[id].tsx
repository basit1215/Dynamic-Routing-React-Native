import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter, useLocalSearchParams, Link } from 'expo-router';

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

                }}>Details for User ID: {id}</Text>
            </View>

            <ScrollView >
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
                        <Text style={styles.value}>
                            {userData.address?.street}, {userData.address?.city}, {userData.address?.zipcode}
                        </Text>

                        <Text style={styles.label}>Gender:</Text>
                        <Text style={styles.value}>{userData.gender}</Text>

                        <Text style={styles.label}>Age:</Text>
                        <Text style={styles.value}>{userData.age}</Text>

                        <Text style={styles.label}>Company:</Text>
                        <Text style={styles.value}>{userData.company?.name}</Text>

                        <Text style={styles.label}>Department:</Text>
                        <Text style={styles.value}>{userData.company?.department}</Text>

                        <Text style={styles.label}>University:</Text>
                        <Text style={styles.value}>{userData.university}</Text>

                        <Link href="/" style={styles.homeButton}>
                            <Text style={styles.homeButtonText}>Go Back to Home</Text>
                        </Link>
                    </View>
                ) : (
                    <Text style={styles.error}>User not found</Text>
                )}
            </ScrollView >
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#6ea52d'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1e40af',
    },
    userInfo: {
        paddingVertical: 8,
        marginBottom: 10,
        marginTop: 14,
        backgroundColor: '#94e931',
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
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#4b5563', 
        marginTop: 10,
    },
    value: {
        fontSize: 18,
        color: '#374151', 
    },
    error: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },

    homeButton: {
        backgroundColor: '#386504',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginTop: 20,
        alignSelf: 'center',
    },
    homeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Details