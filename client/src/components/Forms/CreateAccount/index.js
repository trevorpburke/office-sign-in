import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form';
import Input from '../Input';

export default class CreateAccount extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      error: ''
    };
  }

  handleSubmit(e) {
    // we would want to createa a user and then push to login and push to '/' from here
    e.preventDefault();
    const { history } = this.props;
    history.push('/login');
  }

  handleChange(e) {
    this.state.user[e.target.name] = e.target.value;
  }

  render() {
    const errorStyle = {
      textAlign: 'center',
      color: 'red'
    };

    return (
      <Form
        buttonTitle="Create"
        handleSubmit={this.handleSubmit.bind(this)}
        title="Create Account"
        to="/login"
        linkTitle="Back to Login"
      >
        <Input
          name="firstName"
          type="text"
          placeholder="first name"
          handleChange={this.handleChange.bind(this)}
        />
        <Input
          name="lastName"
          type="text"
          placeholder="last name"
          handleChange={this.handleChange.bind(this)}
        />
        <Input
          name="email"
          type="text"
          placeholder="email"
          handleChange={this.handleChange.bind(this)}
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          handleChange={this.handleChange.bind(this)}
        />
        <div style={errorStyle}>{this.state.error}</div>
      </Form>
    );
  }
}
