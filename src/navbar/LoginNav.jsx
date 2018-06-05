import React from 'react'
import { Link } from 'react-router-dom'

import SignOutButton from '../components/SignOut'

const LoginNav = ({authUser}) =>

<div>
    { authUser
        ? <LoginNavAuth />
        : <LoginNavNonAuth />
    }
  </div>

  const LoginNavAuth = () =>
  <ul>
    <li><Link to="/loginhome">Login Home</Link></li>
    <li><Link to="/contactform">Contact Form</Link></li>
    <li><Link to="/account">Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

   const LoginNavNonAuth = () =>
  <ul>
    <li><Link to="/loginhome">Login Home</Link></li>
    <li><Link to="/signin">Sign In</Link></li>
  </ul>



export default LoginNav