import React from 'react';
import CollectionView from '../../component/Collections/CollectionView/collection-view';

import { connect } from 'react-redux';
import { selectShopCollections } from '../../services/redux/shop.selector';
import { createStructuredSelector } from 'reselect';

const Shop = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionView key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateTopProps = createStructuredSelector({
  collections: selectShopCollections,
});
export default connect(mapStateTopProps)(Shop);
