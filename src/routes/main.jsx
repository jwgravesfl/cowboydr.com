import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import styled from 'styled-components'

import { Login, AuthButton, PrivateRoute} from '../login/Login'
import NavBar from '../navbar/NavBar'
import { Home } from '../pages/home/Home'
import ContactForm from '../pages/contactForm/ContactForm'

const DesktopVersion = styled.div `
@media only screen and (min-width: 767px) {
      /* For mobile phones: */
      [class*="col-"] {
          width: 100%;
      }
    }
`

const MobileVersion = styled.div `
@media only screen and (max-width: 767px) {
      /* For mobile phones: */
      [class*="col-"] {
          width: 100%;
      }
    }
`

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    
    if (!isMobile) {
        return (
          <Router>
            <DesktopVersion>
              <AuthButton />
              <NavBar />
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/contactform" component={ContactForm} />
            </DesktopVersion>
          </Router>
        );
      } else {
        return (
          <Router>
            <MobileVersion>
              Mobile Site Coming Soon
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/contactform" component={ContactForm} />
            </MobileVersion>
          </Router>
        );
      }
    }
}