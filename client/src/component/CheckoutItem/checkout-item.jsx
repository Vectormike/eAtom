import React from 'react';

import { connect } from 'react-redux';

import {
  addItem,
  reduceItem,
  removeItemFomCart,
} from '../../services/redux/actions/cart.action';

import './checkout-item.scss';

function CheckoutItem({ items, addItem, reduceItem, removeItem }) {
  const { imageUrl, name, quantity, price } = items;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => reduceItem(items)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(items)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        onClick={() => removeItem(items)}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  reduceItem: item => dispatch(reduceItem(item)),
  removeItem: item => dispatch(removeItemFomCart(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CheckoutItem);
