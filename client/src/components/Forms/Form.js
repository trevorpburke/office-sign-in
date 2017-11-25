import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default props => {
  const formStyle = {
    marginTop: '4rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    background: '#f5f5f5',
    borderRadius: '2px',
    boxShadow: '1px 1px 4px 2px rgba(0,0,0,0.1)'
  };

  const h2Style = {
    textAlign: 'center'
  };

  const divStyle = {
    textAlign: 'center',
    marginTop: '0.5rem'
  };

  return (
    <form
      className="col-sm-6 col-sm-offset-3"
      style={formStyle}
      onSubmit={props.handleSubmit}
    >
      <h2 style={h2Style}>{props.title}</h2>
      {props.children}
      <Button value={props.buttonTitle} />
      <div style={divStyle}>
        <Link to={props.to}>{props.linkTitle}</Link>
      </div>
    </form>
  );
};
