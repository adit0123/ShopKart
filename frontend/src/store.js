import { applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailsReducer,productReducer } from './reducers/productReducer';
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit

const reducer = combineReducers({
  products: productReducer,
  productDetails:productDetailsReducer,
});

let initialState = {};

const middleware = [thunk];

// Create the store using configureStore
const store = configureStore({
  reducer, // Pass in your combined reducers
  middleware, // Add middleware here if needed
  devTools: true, // Enable Redux DevTools
  preloadedState: initialState, // Pass in the initial state
});

export default store;
