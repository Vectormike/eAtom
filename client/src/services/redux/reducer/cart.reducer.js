import { TOGGLE_CART, ADD_ITEM } from '../constant';

const initialState = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};
