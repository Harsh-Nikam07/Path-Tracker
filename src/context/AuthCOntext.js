import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import trackerAPI from '../api/tracker';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage : action.payload };
        case 'signup' :
            return { errorMessage : '', token : action.payload};
        default:
            return state;
    }
}

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerAPI.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token});
            navigate('mainFlow', { screen: 'TrackListFlow', params: { screen: 'TrackList' } })
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
    return ( {email, password} ) => {

    }
}

const signout = (dispatch) => {
    return () => {

    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout},
    {
        token : null,
        errorMessage : ''
    }
);