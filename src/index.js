/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,Text} from 'react-native';
import {Provider} from 'react-redux'
import App from './App'
import store from './store'
const UnityChan = () => (
    <Provider store={store}>
        <App />
    </Provider>
)
AppRegistry.registerComponent('UnityChan', () => UnityChan);
