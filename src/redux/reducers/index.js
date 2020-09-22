import { combineReducers } from 'redux';
import playgroundReducer from './playgroundReducer';

export default combineReducers({
    playground: playgroundReducer,
})