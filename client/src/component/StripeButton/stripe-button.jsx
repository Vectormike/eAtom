import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  return <StripeCheckout />;
};

export default StripeCheckoutButton;
