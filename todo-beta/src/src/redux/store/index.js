
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import {rootReducer} from '../reducer/rootReducer';
import thunk from 'redux-thunk';

//Let's crete the app store

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;


/**
 * This function returns the store of the application.
 * This store is used in the entry point of the application.
 * @returns {objet} store
 */


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;