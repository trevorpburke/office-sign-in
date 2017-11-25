import React from 'react';

export default props => {
  const buttonStyle = {
    margin: '1rem auto',
    padding: '0.5rem 1rem',
    background: '#5089e4',
    color: '#ffffff',
    borderStyle: 'none',
    borderRadius: '2px'
  };

  return (
    <button style={buttonStyle} type="submit">
      {props.value}
    </button>
  );
};
