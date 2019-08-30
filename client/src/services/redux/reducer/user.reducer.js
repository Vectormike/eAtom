import { SET_CURRENT_USER } from '../constant';

const initialState = {
  presentUser: null,
};

export const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        presentUser: action.payload,
      };
    default:
      return state;
  }
};
