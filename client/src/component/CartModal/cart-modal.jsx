import React from 'react';

import Button from '../Button/button';

import './cart-modal.scss'

export default function CartModal() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Button>PAY</Button>
    </div>
  );
}
