import React, { useContext, useCallback } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity , BackHandler, Platform} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';

const SignInScreen = ({navigation}) => {

    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    useFocusEffect(
        useCallback(() => {
            clearErrorMessage(); 
            const onBackpress = () => {
                navigation.navigate('Signup');
                return true;
            }

            if(Platform.OS === 'android'){
                BackHandler.addEventListener('hardwareBackPress', onBackpress);
            }

            return () => {
                if(Platform.OS === 'android'){
                    BackHandler.addEventListener('hardwareBackPress', onBackpress);
                }
            }
        }, [])
    );


    return (
        <>
            <View style={styles.container}>
  

                <AuthForm
                    headerText='Sign In'
                    submitButtonText='Sign In'
                    errorMessage={state.errorMessage}
                    onSubmit={signin}
                />

                <NavLink
                    navigation={navigation}
                    text='Don`t have an account? Sign up'
                    routeName='Signup'
                />


            </View>
        </>
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
        color: 'red'
    }
})

export default SignInScreen;
