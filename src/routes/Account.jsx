import React from 'react';

import AuthUserContext from '../login/AuthUserContext'
import { PasswordForgetForm } from './PasswordForget'
import PasswordChangeForm from './PasswordChange'
import withAuthorization from '../login/withAuthorization'
import styled from 'styled-components'

const AcountPageMainDiv = styled.div `
  margin-top: 10vh;
`


const AccountPage = () =>
<AcountPageMainDiv>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>
  </AcountPageMainDiv>
  
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);