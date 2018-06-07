import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'recompose'
import LoginNav from '../navbar/LoginNav'

import PasswordChangeForm from './PasswordChange'
import withAuthorization from '../login/withAuthorization'
import styled from 'styled-components'

const AcountPageMainDiv = styled.div `
`


const AccountPage = ({ authUser }) =>
<AcountPageMainDiv>
    <LoginNav />
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordChangeForm />
      </div>
  </AcountPageMainDiv>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});
  
const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);