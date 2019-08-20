import React, { Component } from 'react';
import SHOP_DATA from '../Shop/shop.data';
import CollectionView from '../../component/CollectionView/collection-view';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherProps }) => (
          <CollectionView key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
