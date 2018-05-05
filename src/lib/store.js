import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';

const middlewares = [
    promise(),
    thunk,
];

if (process.env.NODE_ENV !== 'production') {
    const {createLogger} = require('redux-logger'); // eslint-disable-line global-require
    middlewares.push(createLogger({collapsed: true}));
}

const createAppStore = () => createStore(
    () => ({}),
    composeWithDevTools(applyMiddleware(...middlewares))
);

export {
    createAppStore as createStore,
};
