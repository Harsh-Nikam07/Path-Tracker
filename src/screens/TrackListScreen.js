import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const TrackListScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Track List Screen</Text>
            <Button title='track details' onPress={() => navigation.navigate('TrackDetail') }/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
})

export default TrackListScreen;
