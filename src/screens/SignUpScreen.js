import React, { useContext, useCallback, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, BackHandler, Platform } from 'react-native';
import { Text } from '@rneui/themed';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { useFocusEffect } from '@react-navigation/native';


const SignUpScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    useFocusEffect(
        useCallback(() => {
            clearErrorMessage(); 

            const onBackpress = () => {
                BackHandler.exitApp();
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
        <View style={styles.container}>
  
            <AuthForm
                headerText='Sign Up'
                submitButtonText='Sign Up'
                errorMessage={state.errorMessage}
                onSubmit={signup}
            />

            <NavLink
                navigation={navigation}
                text='Already have an account? Sign in'
                routeName='Signin'
            />

        </View>
    );
};

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
});

export default SignUpScreen;
