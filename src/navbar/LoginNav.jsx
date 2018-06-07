import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

import SignOutButton from '../components/SignOut'

const LoginNavDiv = styled.div `
    z-index: 9999;
    position: absolute;
    top: 1vh;
    right: 1vw;

    .loginNavGrid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
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
    <div className="loginNavCells"><NavLink to="/">Press Kit</NavLink></div>
    <div className="loginNavCells"><NavLink to="/userspage">User List</NavLink></div>
    <div className="loginNavCells"><NavLink to="/account">Account</NavLink></div>
    <div className="loginNavCells"><SignOutButton /></div>
  </div>

   const LoginNavNonAuth = () =>
  <div className="loginNavGrid">
    <div className="loginNavCells"><NavLink to="/">Press Kit</NavLink></div>
    <div className="loginNavCells"><NavLink to="/signin">Sign In</NavLink></div>
  </div>

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });
  
  export default connect(mapStateToProps)(LoginNav);