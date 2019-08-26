import React from 'react';
import './button.scss';

export default function LoginButton({
  children,
  isGoogleSignIn,
  ...otherProps
}) {
  return (
    <button
      className={`${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
