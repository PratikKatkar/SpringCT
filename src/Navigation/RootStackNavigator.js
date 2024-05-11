import React from 'react';
import {Provider} from 'react-redux';
import RootStackNavigatorContent from './RootStackNavigatorContent';
import store from '../Redux/store';

const RootStackNavigator = () => {
  return <RootStackNavigatorContent />;
};

export default RootStackNavigator;
