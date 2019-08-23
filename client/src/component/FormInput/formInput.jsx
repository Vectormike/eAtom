import React from 'react';

export default function FormInput({
  label,
  handleChange,
  ...otherProps
}) {
  return (
    <div>
      <input onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
