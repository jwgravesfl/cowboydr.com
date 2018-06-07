import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

import SignOutButton from '../components/SignOut'

const LoginNavDiv = styled.div `
    
`


const LoginNav = ({ authUser }) =>
<LoginNavDiv>
  { authUser
    ? <LoginNavAuth />
    : <LoginNavNonAuth />
  }
</LoginNavDiv>

const LoginNavAuth = () =>
  <ul>
    <li><NavLink to="/">Login Home</NavLink></li>
    <li><NavLink to="/contactform">Contact Form</NavLink></li>
    <li><NavLink to="/account">Account</NavLink></li>
    <li><SignOutButton /></li>
  </ul>

   const LoginNavNonAuth = () =>
  <ul>
    <li><NavLink to="/">Login Home</NavLink></li>
    <li><NavLink to="/signin">Sign In</NavLink></li>
  </ul>

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });
  
  export default connect(mapStateToProps)(LoginNav);