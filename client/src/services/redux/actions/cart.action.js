import {
  TOGGLE_CART,
  ADD_ITEM,
  REDUCE_ITEM,
  REMOVE_ITEM_FROM_CART,
} from '../constant';

export const cartAction = () => ({
  type: TOGGLE_CART,
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const reduceItem = item => ({
  type: REDUCE_ITEM,
  payload: item,
});

export const removeItemFomCart = item => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item,
});
