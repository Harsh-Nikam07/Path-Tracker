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
<<<<<<< HEAD
import SplashScreen from './src/screens/SplashScreen';
import { navigationRef } from './src/navigationRef';
import { Feather } from '@expo/vector-icons';
import { Provider as TrackProvider } from './src/context/TrackContext';


//contexts
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as AuthProvider } from './src/context/AuthContext';
=======

import { navigationRef } from './src/navigationRef';

//contexts

import { Provider as AuthProvider } from './src/context/AuthCOntext';
>>>>>>> e291a27c1a827b8dc5395918e939590bdb040d0b

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
<<<<<<< HEAD
      <Stack.Screen name='TrackList' component={TrackListScreen} options={{headerShown: false}}/>
=======
      <Stack.Screen name='TrackList' component={TrackListScreen}/>
>>>>>>> e291a27c1a827b8dc5395918e939590bdb040d0b
      <Stack.Screen name='TrackDetail' component={TrackDetailScreen}/>
    </Stack.Navigator>
  );
};

const MainFlow = () => {
  return (
<<<<<<< HEAD
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#666',
        tabBarActiveBackgroundColor: '#f5f5f5',
      }}
    >
      <Tab.Screen 
        name='TrackListFlow' 
        component={TrackListFlow} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name='TrackCreate' 
        component={TrackCreateScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus" size={size} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen 
        name='Account' 
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
          headerShown: false
        }}
      />
=======
    <Tab.Navigator>
      <Tab.Screen name='TrackListFlow' component={TrackListFlow} options={{headerShown: false}}/>
      <Tab.Screen name='TrackCreate' component={TrackCreateScreen}/>
      <Tab.Screen name='Account' component={AccountScreen}/>
>>>>>>> e291a27c1a827b8dc5395918e939590bdb040d0b
    </Tab.Navigator>
  );
};

const App = ( ) => {
  return  (
<<<<<<< HEAD
      <TrackProvider>
        <LocationProvider>
          <AuthProvider>
            <NavigationContainer ref={navigationRef}>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={SplashScreen}/>
                <Stack.Screen name="loginFlow" component={LoginFlow} />
                <Stack.Screen name="mainFlow" component={MainFlow} />
              </Stack.Navigator>
            </NavigationContainer>
          </AuthProvider>
        </LocationProvider>
      </TrackProvider>
  );
}

=======
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


>>>>>>> e291a27c1a827b8dc5395918e939590bdb040d0b
export default App;
