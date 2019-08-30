import { combineReducers } from 'redux';
import userReducer from '../reducer/user.reducer';

export default combineReducers({ user: userReducer });
