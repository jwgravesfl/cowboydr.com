import React, { Component } from 'react'

import { Route, Redirect, withRouter } from "react-router-dom";

import styled from 'styled-components'

const AuthButtonP = styled.p `
    background-color: yellow;
    width: 100px;
    height: 30px;
    position: fixed;
    top: 5%;
    right: 5%;
    z-index: 9999;
`

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <AuthButtonP>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </AuthButtonP>
    ) : (
      <AuthButtonP>You are not logged in.</AuthButtonP>
    )
);

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export class Login extends Component {
    state = {
        redirectToReferrer: false
      };
    
      login = () => {
        fakeAuth.authenticate(() => {
          this.setState({ redirectToReferrer: true });
        });
      };
    
      render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;
    
        if (redirectToReferrer) {
          return <Redirect to={from} />;
        }
    
        return (
          <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={this.login}>Log in</button>
          </div>
        );
      }
}