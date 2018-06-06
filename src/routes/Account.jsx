import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'recompose'

import { PasswordForgetForm } from './PasswordForget'
import PasswordChangeForm from './PasswordChange'
import withAuthorization from '../login/withAuthorization'
import styled from 'styled-components'

const AcountPageMainDiv = styled.div `
  margin-top: 10vh;
`


const AccountPage = ({ authUser }) =>
<AcountPageMainDiv>
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
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