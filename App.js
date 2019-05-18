/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import BaseNavigation from '././src/app/components/routes';

import { createStore, applyMiddleware, combineReducers } from 'redux'



import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return(
     <BaseNavigation/>
    // return (
    // <Provider store={store}>
    //   <BaseNavigation/>
    // </Provider>
    );
  }
}
