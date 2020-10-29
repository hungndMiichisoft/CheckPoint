/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'intl';
import 'intl/locale-data/jsonp/en';

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import Root from 'screens/Root/index';
import LanguageProvider from 'components/LanguageProvider';
 
// Import i18n messages
import { translationMessages } from './i18n';


// Create redux store with history
const initialState = {};
const store = configureStore(initialState);

const App = () => {
  return (
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <Root />
      </LanguageProvider>
    </Provider>
  );
};

export default App;
