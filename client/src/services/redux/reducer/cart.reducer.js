import { TOGGLE_CART } from '../constant';

const initialState = {
  hidden: true,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
