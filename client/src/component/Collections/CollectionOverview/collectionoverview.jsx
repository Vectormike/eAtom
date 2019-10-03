import React from 'react';

import CollectionView from '../CollectionView/collection-view';

import { connect } from 'react-redux';
import { selectShopCollections } from '../../../services/redux/shop.selector';
import { createStructuredSelector } from 'reselect';

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionView key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
