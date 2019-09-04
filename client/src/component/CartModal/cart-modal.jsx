import React from 'react';
import Button from '../Button/button';
import CartItems from '../CartItems/cart-items';
import { connect } from 'react-redux';

import './cart-modal.scss';

function CartModal({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItems key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>PAY</Button>
    </div>
  );
}

const mapStateToProps = state => ({
  cartItems: state.cartItems,
});

export default connect(mapStateToProps)(CartModal);
