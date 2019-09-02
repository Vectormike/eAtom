import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';

import { cartAction } from '../../services/redux/actions/cart.action.js';
import { connect } from 'react-redux';
import './cart-icon.scss';

function CartIcon({ toggleModal }) {
  return (
    <div className="cart-icon" onClick={toggleModal}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(cartAction()),
});

export default connect(
  null,
  mapDispatchToProps,
)(CartIcon);
