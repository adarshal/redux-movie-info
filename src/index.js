import React from 'react';
import ReactDOM from 'react-dom';
// import {configureStore } from 'redux';
// import { createSlice, configureStore, createStore } from '@reduxjs/toolkit'
import {createStore} from 'redux'

import './index.css';
import { App } from './components';
import rootReducer from './reducers';

const store=createStore(rootReducer)
// const store = configureStore({
//   reducer: counterSlice.reducer
// })

// console.log(store);
// console.log('before state',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// })

// console.log('after state',store.getState())

ReactDOM.render(

    <App store={store} />,

  document.getElementById('root')
);
