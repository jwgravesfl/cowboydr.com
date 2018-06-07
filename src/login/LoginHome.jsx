import React from 'react'
import withAuthentication from './withAuthentication'

import LoginNav from '../navbar/LoginNav'

const LoginHome = () => 

<div>
    <LoginNav />
    
</div>

export default withAuthentication(LoginHome)