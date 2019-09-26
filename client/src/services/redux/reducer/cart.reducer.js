import {
  TOGGLE_CART,
  ADD_ITEM,
  REDUCE_ITEM,
  REMOVE_ITEM_FROM_CART,
} from '../constant';

import {
  addItemToCart,
  reduceItemFromCart,
} from '../reducer/cart.utils';

const initialState = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case REDUCE_ITEM:
      return {
        ...state,
        cartItems: reduceItemFromCart(
          state.cartItems,
          action.payload,
        ),
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};
