import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import SplashScreen from '../SplashScreen';
import Login from '../InitialScreen/Login';

const Stack = createNativeStackNavigator();

const RootStackNavigatorContent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'SplashScreen'}>
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigatorContent;
