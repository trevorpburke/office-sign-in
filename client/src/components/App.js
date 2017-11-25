import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateAccount from './Forms/CreateAccount/';
import Login from './Forms/Login/';

export default class App extends React.Component {
  render() {
    const wrapperStyle = {
      height: '100%',
      width: '100%'
    };

    return (
      <div style={wrapperStyle}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/create-account" component={CreateAccount} />
        </Switch>
      </div>
    );
  }
}
