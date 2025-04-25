import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailsScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';

import { navigationRef } from './src/navigationRef';

//contexts

import { Provider as AuthProvider } from './src/context/AuthCOntext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LoginFlow = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Signup' component={SignUpScreen}/>
      <Stack.Screen name='Signin' component={SignInScreen}/>
    </Stack.Navigator>
  );
};

const TrackListFlow = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name='TrackList' component={TrackListScreen}/>
      <Stack.Screen name='TrackDetail' component={TrackDetailScreen}/>
    </Stack.Navigator>
  );
};

const MainFlow = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='TrackListFlow' component={TrackListFlow} options={{headerShown: false}}/>
      <Tab.Screen name='TrackCreate' component={TrackCreateScreen}/>
      <Tab.Screen name='Account' component={AccountScreen}/>
    </Tab.Navigator>
  );
};

const App = ( ) => {
  return  (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="loginFlow" component={LoginFlow} />
          <Stack.Screen name="mainFlow" component={MainFlow} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}


export default App;
