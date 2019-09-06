import React from 'react';
import Button from '../Button/button';
import CartItems from '../CartItems/cart-items';
import { selectCartItems } from '../../services/redux/cart.selectors';
import { connect } from 'react-redux';

import './cart-modal.scss';

function CartModal({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(items => (
          <CartItems key={items.id} item={items} />
        ))}
      </div>
      <Button>PAY</Button>
    </div>
  );
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartModal);
