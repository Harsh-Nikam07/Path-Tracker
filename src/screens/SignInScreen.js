import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const SignInScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign In Screen</Text>
            <Button title='sign up' onPress={() => navigation.navigate('Signup') }  />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        gap: 20
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
})

export default SignInScreen;
