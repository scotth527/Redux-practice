import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import productsReducer from './reducers/productsReducer.js';
import userReducer from './reducers/userReducer.js';
import { createSelector } from 'reselect';

const allReducers = combineReducers({
  products:productsReducer,
  user: userReducer
})

const updateUserAction = {
  type:'updateUser',
  payload: {
    user:'John'
  }
}

//Thunk middleware needs to come first
const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

//first paramater is the reducer
//second parameter in createStore is the initial state
const store = createStore(
  allReducers,
  { products:[{name: 'iPhone'}], user:'Michael'},
  allStoreEnhancers
);


console.log(store.getState())

//You need the dispatch to activate the action, the action goes in as the first aprameter
store.dispatch(updateUserAction)

ReactDOM.render(<Provider store={store}> <App randomProp="WHATEVER" /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
