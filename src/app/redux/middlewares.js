import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';

const middlewares = applyMiddleware(promiseMiddleware, logger);

export default middlewares;