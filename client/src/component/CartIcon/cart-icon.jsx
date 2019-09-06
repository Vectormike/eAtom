import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';

import { cartAction } from '../../services/redux/actions/cart.action.js';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../services/redux/cart.selectors';

import './cart-icon.scss';

function CartIcon({ toggleModal, count }) {
  return (
    <div className="cart-icon" onMouseOver={toggleModal} >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
}

const mapStateToProps = state => ({
  count: selectCartItemsCount(state),
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(cartAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartIcon);
