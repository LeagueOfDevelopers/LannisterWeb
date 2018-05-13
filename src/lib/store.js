import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';

import AppReducer from '../reducers';
import {middleware as navigationMiddleware} from './redux';

const middlewares = [
    navigationMiddleware,
    promise(),
    thunk,
];

if (process.env.NODE_ENV !== 'production') {
    const {createLogger} = require('redux-logger'); // eslint-disable-line global-require
    middlewares.push(createLogger({collapsed: true}));
}

const createAppStore = () => createStore(
    AppReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export {
    createAppStore as createStore,
};
