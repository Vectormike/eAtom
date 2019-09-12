import React from 'react';
import Button from '../Button/button';
import CartItems from '../CartItems/cart-items';
import { cartAction } from '../../services/redux/actions/cart.action';
import { selectCartItems } from '../../services/redux/cart.selectors';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './cart-modal.scss';

function CartModal({ cartItems, history, hidden }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(items => (
            <CartItems key={items.id} item={items} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push('/checkout');
          hidden();
        }}
      >
        PAY
      </Button>
    </div>
  );
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = dispatch => ({
  hidden: () => dispatch(cartAction()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CartModal),
);
