import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import trackerAPI from '../api/tracker';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage : action.payload };

        case 'clear_error_message' :
            return { ...state, errorMessage : ''};
        case 'signup' :
            return { errorMessage : '', token : action.payload.token, email : action.payload.email};

        case 'signin' :
            return { errorMessage : '', token : action.payload.token, email : action.payload.email};
        
        case 'signout':
            return {...state, token: null, email : null, errorMessage : ''}
        
            default:
            return state;
    }
}

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({
            type : 'clear_error_message'
        })
    }
}


const tryLocalSignIn = (dispatch) => {
    return async() => {

        const token = await AsyncStorage.getItem('token');
        const email = await AsyncStorage.getItem('email');
        if(token){
            dispatch({
                type : 'signin',
                payload : {
                    token ,
                    email
                }
            })

            navigate('mainFlow', { screen: 'TrackListFlow', params: { screen: 'TrackList' } })
        }else{
            navigate('loginFlow')
        }
    }
}

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerAPI.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('email', email);
            dispatch({type: 'signup',
                payload : {
                    token : response.data.token,
                    email : email
                }
            });
            navigate('Signin')
        } catch (error) {
            console.log('Signup error:', error.response ? error.response.data : error.message);
            dispatch({
                type: 'add_error', 
                payload: error.response ? 
                    error.response.data.error || 'User Already exists' : 
                    'Network error during sign up' 
            }); 
        }
    };
};

const signin = (dispatch) => {
    return async ( {email, password} ) => {
        try {
            const response = await trackerAPI.post('/signin', {email, password})
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('email', email);
            dispatch({
                type : 'signin',
                payload : {
                    token : response.data.token,
                    email : email
                }
            })
            navigate('mainFlow', { screen: 'TrackListFlow', params: { screen: 'TrackList' } })
        } catch (error) {
            dispatch({
                type: 'add_error',
                payload: 'Invalid email or password Try Signing Up'
            })
        }
    }
}

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('email');
        dispatch({
            type : 'signout',
            payload : null
        })
        navigate('loginFlow')
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignIn},
    {
        token : null,
        errorMessage : '',
        email : null
    }
);