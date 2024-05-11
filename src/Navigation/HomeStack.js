import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home/HomeScreen';
import Icon from 'react-native-vector-icons/Entypo';
import {Text, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Employees from '../SettingScreen';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Employees') {
              iconName = focused ? 'message' : 'message';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            display: 'flex',
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Employees" component={Employees} />
      </Tab.Navigator>
    </>
  );
};

export default HomeStack;
