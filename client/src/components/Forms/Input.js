import React from 'react';

export default props => {
  const inputStyle = {
    margin: '1rem 0',
    padding: '0.5rem',
    borderStyle: 'none',
    borderRadius: '2px',
    border: '1px solid #d0d0d0'
  };

  return (
    <input
      style={inputStyle}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
};
