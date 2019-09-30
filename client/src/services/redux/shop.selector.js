import { createSelector } from 'reselect';

const selectShop = select => select.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections,
);
