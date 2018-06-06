import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import SignOutButton from '../components/SignOut'

const LoginNavDiv = styled.div `
    position: fixed;
    top: 1vh;
    left: 1vh;
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
    <li><Link to="/">Login Home</Link></li>
    <li><Link to="/contactform">Contact Form</Link></li>
    <li><Link to="/account">Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

   const LoginNavNonAuth = () =>
  <ul>
    <li><Link to="/">Login Home</Link></li>
    <li><Link to="/signin">Sign In</Link></li>
  </ul>

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });
  
  export default connect(mapStateToProps)(LoginNav);