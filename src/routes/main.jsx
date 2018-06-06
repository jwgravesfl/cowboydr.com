import React, { Component } from "react";
import {Route} from "react-router-dom";

import styled from 'styled-components'

import NavBar from '../navbar/NavBar'
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
    const isMobile = width <= 769;
    
    if (!isMobile) {
        return (
            <DesktopVersion>
              <LoginHome />
              <NavBar />
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/passwordforget" component={PasswordForget} />
              <Route path="/account" component={AccountPage} />
              <Route path="/userspage" component={UsersPage} />
            </DesktopVersion>
        );
      } else {
        return (
            <MobileVersion>
              Mobile Site Coming Soon
              <Route exact path="/" component={MobileHome} />
              </MobileVersion>
        );
      }
    }
}

export default withAuthentication(Main)