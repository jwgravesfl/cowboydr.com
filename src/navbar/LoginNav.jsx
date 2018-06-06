import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import AuthUserContext from '../login/AuthUserContext'
import SignOutButton from '../components/SignOut'

const LoginNavDiv = styled.div `
    position: fixed;
    top: 1vh;
    left: 1vh;
`


const LoginNav = () =>
<LoginNavDiv>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <LoginNavAuth />
      : <LoginNavNonAuth />
    }
  </AuthUserContext.Consumer>
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

export default LoginNav