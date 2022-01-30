import { combineReducers } from 'redux';
import lists from './lists';
import auth from './auth';

export const reducers = combineReducers({ lists, auth });
