import { createSelector } from 'reselect';

const selectShop = select => select.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections,
);

export const selectCollectionsForOverview = createSelector(
  [selectShopCollections],
  collections =>
    Object.keys(collections).map(key => collections[key]),
);

export const selectCategory = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam],
  );
