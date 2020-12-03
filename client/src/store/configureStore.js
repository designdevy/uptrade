import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import auth from './auth'
import cart from './cart'
// import category from './categories'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth,
  cart,
  
});

// let storeEnhancer;

// if (process.env.NODE_ENV === 'production') {
//   storeEnhancer = composeEnhancers(applyMiddleware(thunk));
// } else {
//   storeEnhancer = applyMiddleware(thunk);
// }

export default function configureStore(preloadedState) {
  return createStore(
      rootReducer,
      preloadedState,
      composeEnhancers(applyMiddleware(thunk)),
    )
  }



