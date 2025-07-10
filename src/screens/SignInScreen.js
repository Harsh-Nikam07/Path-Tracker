<<<<<<< HEAD
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
=======
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const SignInScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign In Screen</Text>
            <Button title='sign up' onPress={() => navigation.navigate('Signup') }  />
        </View>
>>>>>>> e291a27c1a827b8dc5395918e939590bdb040d0b
    );
}

const styles = StyleSheet.create({
    container: {
<<<<<<< HEAD
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        gap: 20,
        padding: 20
=======
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        gap: 20
>>>>>>> e291a27c1a827b8dc5395918e939590bdb040d0b
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
<<<<<<< HEAD
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
=======
>>>>>>> e291a27c1a827b8dc5395918e939590bdb040d0b
})

export default SignInScreen;
