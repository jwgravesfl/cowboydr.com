import React, { Component } from 'react'

import { Route, Redirect, withRouter } from "react-router-dom";

import styled from 'styled-components'



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

const AuthButtonP = styled.p `
    background-color: yellow;
    position: fixed;
    top: 0;
    left: 1%;
    z-index: 9999;
`

export const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <AuthButtonP>
        Welcome!{" J"}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </AuthButtonP>
    ) : (
      <AuthButtonP>You are not logged in.<button
      onClick={() => {
        fakeAuth.authenticate(() => history.push("/"));
      }}
    >
      Login
    </button></AuthButtonP>
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