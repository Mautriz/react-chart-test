import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';

const middleware = [];

// il logger si attiva solo in development
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
