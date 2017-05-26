/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {AppRegistry,Text} from 'react-native';
import {Provider} from 'react-redux'
import App from './app/containers/App'
import store from './app/store'
const UnityChan = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('UnityChan', () => UnityChan);


