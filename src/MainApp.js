import React, { Component } from 'react';
import allReducers from './reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
const store = createStore(allReducers);

export default class MainApp extends Component{
  render(){
    return(
      <Provider store= {store}>
        <App />
      </Provider>
    );
  }
}