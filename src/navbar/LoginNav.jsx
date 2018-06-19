import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

import SignOutButton from '../components/SignOut'

const LoginNavDiv = styled.div `
position: fixed;
top: 1%;
right: 1%;
width: 40vw;
border-top: .5vw solid white;
border-bottom: .5vw solid white;
padding: 1vw 0;
font-size: 2vw;
font-family: 'Concert One', cursive;
text-align: center;
font-variant: small-caps;
text-shadow: .1vw .1vw #000000;
z-index: 9999;
      
a,
a:link,
a:visited {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

a:hover,
a:active {
  color: black;
    text-decoration: none;
    font-weight: bold;
    text-shadow: .1vw .1vw #FFFFFF;
}

    .loginNavGrid {
     
    }

    .loginNavCells {
      width: 50%;
      padding: 1vw;
    }
`


const LoginNav = ({ authUser }) =>
<LoginNavDiv>
  { authUser
    ? <LoginNavAuth />
    : <LoginNavNonAuth />
  }
</LoginNavDiv>

const LoginNavAuth = () =>
  <div className="loginNavGrid">
    <span className="loginNavCells"><NavLink to="/">Press Kit</NavLink></span>
    <span className="loginNavCells"><NavLink to="/userspage">User List</NavLink></span>
    <span className="loginNavCells"><NavLink to="/account">Account</NavLink></span>
    <span className="loginNavCells"><SignOutButton /></span>
  </div>

   const LoginNavNonAuth = () =>
  <div className="loginNavGrid">
    <span className="loginNavCells"><NavLink to="/">Press Kit</NavLink></span>
    <span className="loginNavCells"><NavLink to="/signin">Sign In</NavLink></span>
  </div>

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });
  
  export default connect(mapStateToProps)(LoginNav);