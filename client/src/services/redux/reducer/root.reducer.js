import { combineReducers } from 'redux';
import { userReducer } from '../reducer/user.reducer';
import { cartReducer } from '../reducer/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
