import { StyleSheet, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react'
import { Text, Input, Button } from '@rneui/themed';

const AuthForm = ( {headerText, errorMessage, onSubmit, submitButtonText} ) => {

    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleSignIn = async () => {
        setIsLoading(true);
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email');
            setIsLoading(false);
            return;
        }
        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters long');
            setIsLoading(false);
            return;
        }
        await onSubmit({ email, password });
        setIsLoading(false);
    };
    
    const handleEmailChange = (text) => {
        setEmail(text);
        if (validateEmail(text)) {
            setEmailError('');
        }
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        if (validatePassword(text)) {
            setPasswordError('');
        }
    };
    
  return (
        <>
        <Text h3>{headerText}</Text>

        <Input 
            label="Email"
            style={styles.input}
            value={email}
            onChangeText={handleEmailChange}
            autoCapitalize='none'
            autoCorrect={false}
        />
        {emailError && <Text style={[styles.error, { marginTop: 5 }]}>{emailError}</Text>}
        
        <Input
            label="Password"
            style={styles.input}
            value={password}
            onChangeText={handlePasswordChange}
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
        {passwordError && <Text style={[styles.error, { marginTop: 5 }]}>Error: {passwordError}</Text>}

        {errorMessage && <Text style={[styles.error, { marginTop: 5 }]}>Error: {errorMessage}</Text>}

        <TouchableOpacity onPress={handleSignIn}>
            <View style={styles.button}>
                {isLoading ? (
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <ActivityIndicator size="small" color="#fff" />
                        <Text style={styles.buttonText}>{submitButtonText}</Text>
                    </View>
                ) : (
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Text style={styles.buttonText}>{submitButtonText}</Text>
                        <Feather name='arrow-right' size={20} color='#fff' />
                    </View>
                )}
            </View>
        </TouchableOpacity>
       


    </>
  )
}

export default AuthForm

const styles = StyleSheet.create({

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
        fontSize: 16,
    },
    error: {
        color: 'red'
    }
})