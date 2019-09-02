import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../services/redux/actions/cart.action';
import Button from '../../Button/button';
import './collection-item.scss';

function CollectionItem({ item, addItem }) {
  const { id, name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button onClick={() => addItem(item)} inverted>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps,
)(CollectionItem);
