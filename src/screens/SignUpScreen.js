import React, { useState, useContext } from 'react';
import { StyleSheet, View, ActivityIndicator, TouchableOpacity } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import { Text } from '@rneui/themed';
import { Input } from '@rneui/themed';
import { Button } from '@rneui/themed';
import { Context as AuthCOntext } from '../context/AuthCOntext';

const SignUpScreen = ({ navigation }) => {

    const {state, signup} = useContext(AuthCOntext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    console.log(state);

    const handleSignUp = async () => {
        setIsLoading(true);
        if (!validateEmail(email)) {
            setEmailError('Invalid email format');
            setIsLoading(false);
            return;
        }
        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters long');
            setIsLoading(false);
            return;
        }
        await signup({ email, password });
        setIsLoading(false); 
    }

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    const validatePassword = (password) => {
        return password.length >= 8;
    }

    return (
        <View style={styles.container}>
            <Text h3>Sign Up</Text>

                <Input 
                    label="Email"
                    style={styles.input} 
                    value={email} 
                    onChangeText={setEmail} 
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                {emailError && <Text style={[styles.error, {marginTop: 5}]}>Error: {emailError}</Text>}
                
                <Input
                    label="Password"
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={!isPasswordVisible}
                    rightIcon={
                        <Feather
                        name={isPasswordVisible ? 'eye' : 'eye-off'}
                        size={24}
                        color="black"
                        onPress={togglePasswordVisibility}
                      />
                    }
                />
                {passwordError && <Text style={[styles.error, {marginTop: 5}]}>Error: {passwordError}</Text>}

                {state.errorMessage && <Text style={[styles.error, {marginTop: 5}]}>Error: {state.errorMessage}</Text>}

                <TouchableOpacity onPress={handleSignUp}>
                    <View style={styles.button}>
                        {
                            isLoading ? 
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                                <ActivityIndicator size="small" color="#fff" />
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </View> : 
                            <Text style={styles.buttonText}>Sign Up</Text>
                        }
                        
                    </View>
                </TouchableOpacity>

                {/* <Button title="main flow" onPress={() => navigation.navigate('mainFlow')} /> */}
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        gap: 20,
        padding: 20

    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    button: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        
    }
    


})

export default SignUpScreen;
