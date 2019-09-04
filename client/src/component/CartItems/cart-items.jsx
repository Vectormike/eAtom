import React from 'react';

import './cart-item.scss';

const CartItems = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="cart item" />
    <div>
      <span className="name">{name}</span>
      <span className="price">
        ₦{price} x {quantity}
      </span>
    </div>
  </div>
);

export default CartItems;
