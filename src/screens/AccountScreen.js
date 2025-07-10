import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { Octicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountScreen = () => {
    const { state, signout } = useContext(AuthContext);
    const [email, setEmail] = useState('not available')

    useEffect(() => {
        const getEmail = async () => {
            try {
                
                if (state?.email) {
                    setEmail(state.email);
                    return; 
                }
    
                const storedEmail = await AsyncStorage.getItem('email');
                if (storedEmail) {
                    setEmail(storedEmail);
                }
            } catch (error) {
                console.log('Error getting email', error);
            }
        }
        getEmail();
    }, [state.email])
    
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Account Settings</Text>
            <Text style={styles.text}>Hey 👋 {email}</Text>
            <Text style={[styles.text, {fontSize: 16, fontWeight: 'normal', marginTop: 10}]}>Manage your account settings and preferences</Text>
            <TouchableOpacity style={styles.button} onPress={signout}>
                <Text style={styles.buttonText}>Sign Out</Text>
                <Octicons name="sign-out" size={18} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 60
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20
    },
    headingText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5
    },
    button: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        gap: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default AccountScreen;
