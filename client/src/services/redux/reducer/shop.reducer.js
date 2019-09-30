import { SHOP_DATA as collections } from '../shop.data';

const INITIAL_STATE = {
  collections,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
