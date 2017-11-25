import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form';
import Input from '../Input';

export default class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      error: ''
    };
  }

  handleSubmit(e) {
    // we want to pass the username / pw to auth endpoints here and push to '/' on success
    e.preventDefault();
    const { history } = this.props;
    history.push('/login');
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Form
        title="Login"
        handleSubmit={this.handleSubmit.bind(this)}
        buttonTitle="Submit"
        to="/create-account"
        linkTitle="Create Account"
      >
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
      </Form>
    );
  }
}
