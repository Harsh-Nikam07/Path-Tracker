<<<<<<< HEAD
import React, { useContext, useEffect } from 'react';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({navigation}) => {
    const { state, fetchTracks } = useContext(TrackContext);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchTracks();
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Tracks</Text>
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity 
                            style={styles.trackItem}
                            onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}
                        >
                            <Text style={styles.trackName}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
=======
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const TrackListScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Track List Screen</Text>
            <Button title='track details' onPress={() => navigation.navigate('TrackDetail') }/>
>>>>>>> e291a27c1a827b8dc5395918e939590bdb040d0b
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
<<<<<<< HEAD
        backgroundColor: '#fff',
        paddingTop: 60,
        marginBottom: 0
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1a1a',
        textAlign: 'center',
        marginBottom: 25,
        letterSpacing: 0.5
    },
    listContainer: {
        paddingHorizontal: 16,
        paddingBottom: 20
    },
    trackItem: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        
    },
    trackName: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2c3e50',
        padding: 16,
    }
=======
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
>>>>>>> e291a27c1a827b8dc5395918e939590bdb040d0b
})

export default TrackListScreen;
