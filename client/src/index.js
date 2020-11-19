import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { saveState, loadState } from './store/localStorage'
// import { createStore } from 'redux'
// import cart from './store/cart'

const preloadedState = loadState()

if (process.env.NODE_ENV !== 'production') {
  const getCSRFToken = () => {
    return fetch("/api/csrf/token");
  };

  getCSRFToken();
}

const store = configureStore(preloadedState);


if(process.env.NODE_ENV !== 'production'){
  window.store = store;
} 

// store.subscribe(() => {
//   saveState(store.getState());
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App state={preloadedState} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
