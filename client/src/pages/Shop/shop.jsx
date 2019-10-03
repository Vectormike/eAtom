import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../component/Collections/CollectionOverview/collectionoverview';
import CategoryPage from '../Category/category';

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route
      exact
      path={`${match.path}`}
      component={CollectionOverview}
    />
    <Route
      path={`${match.path}/:categoryId`}
      component={CategoryPage}
    />
  </div>
);
export default Shop;
