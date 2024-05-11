import React from 'react';
import RootStackNavigator from './src/Navigation/RootStackNavigator';
import store from './src/Redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <RootStackNavigator />
    </Provider>
  );
};

export default App;
