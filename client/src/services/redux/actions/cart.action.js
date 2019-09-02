import { TOGGLE_CART, ADD_ITEM } from '../constant';

export const cartAction = () => ({
  type: TOGGLE_CART,
});

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
})