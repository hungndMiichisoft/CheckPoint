/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import Root from 'screens/Root/index';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
