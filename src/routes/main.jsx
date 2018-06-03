import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import styled from 'styled-components'

import { Login, PrivateRoute} from '../login/Login'
import NavBar from '../navbar/NavBar'
import { Home } from '../pages/home/Home'
import { Booking } from '../pages/home/Booking'


import ContactForm from '../pages/forms/ContactForm'



// Mobile Version Route Imports
import MobileHome from '../pages/mobile/home/MobileHome'

const DesktopVersion = styled.div `

`

const MobileVersion = styled.div `
  min-height: 100vh;
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
              <NavBar />
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/booking" component={Booking} />
              <PrivateRoute path="/contactform" component={ContactForm} />
            </DesktopVersion>
          </Router>
        );
      } else {
        return (
          <Router>
            <MobileVersion>
              Mobile Site Coming Soon
              <Route exact path="/" component={MobileHome} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/contactform" component={ContactForm} />
            </MobileVersion>
          </Router>
        );
      }
    }
}