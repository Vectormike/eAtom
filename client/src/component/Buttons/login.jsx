import React from 'react';

export default function LoginButton({ children, ...otherProps }) {
  return (
    <button className="custom-button" otherProps>
      {children}
    </button>
  );
}
