import {createStore, applyMiddleware, compose} from "redux"
import rootReducer from './reducers'
import reduxImmutableStateInvariant
from "redux-immutable-state-invariant"
import thunk from 'redux-thunk'
//import the index.js rootReducer

export default function configureStore(initialState) {
  //add support for redux dev-tools
  //middleware to check for immutable state
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer,initialState,
    composeEnhancers(applyMiddleware(thunk,reduxImmutableStateInvariant())))
}
