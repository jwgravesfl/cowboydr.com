import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import styled from 'styled-components'


import {Home} from '../pages/home/Home'

import LoginHome from '../login/LoginHome'

import SignUp from './SignUp'
import SignIn from './SignIn'
import PasswordForget from './PasswordForget'
import AccountPage from './Account'
import withAuthentication from '../login/withAuthentication'


import UsersPage from '../admin/UsersPage'



// Mobile Version Route Imports
import MobileHome from '../pages/mobile/home/MobileHome'

const DesktopVersion = styled.div `
      background: #3e4f5b;
`

const MobileVersion = styled.div `
  min-height: 100vh;
`

class Main extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };

  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 600;
    
    if (!isMobile) {
        return (
          <BrowserRouter basename={process.env.PUBLIC_URL}>
          
            <DesktopVersion>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/loginhome" component={LoginHome} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/passwordforget" component={PasswordForget} />
              <Route path="/account" component={AccountPage} />
              <Route path="/userspage" component={UsersPage} />
              </Switch>
            </DesktopVersion>
          </BrowserRouter>
        );
      } else {
        return (
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <MobileVersion>
            <Switch>
            <Route exact path="/" component={MobileHome} />
            <Route path="/loginhome" component={LoginHome} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/passwordforget" component={PasswordForget} />
            <Route path="/account" component={AccountPage} />
            <Route path="/userspage" component={UsersPage} />
            </Switch>
              </MobileVersion>
          </BrowserRouter>
        );
      }
    }
}

export default withAuthentication(Main)