import {combineReducers} from 'redux';
import { homePage } from '../view/homePage/reducer';
import { commonState } from './reducer.js';

export const rootReducer = combineReducers({
    commonState,
    homePage,
});
