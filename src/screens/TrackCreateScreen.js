import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TrackCreateScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Track Create Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
    },
})

export default TrackCreateScreen;
