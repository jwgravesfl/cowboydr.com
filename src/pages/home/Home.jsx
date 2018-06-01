import React from 'react'
import styled from 'styled-components'

import LandingPage from './LandingPage'

const HomeDiv = styled.div `
    min-height: '100vh',


`

export const Home = () => 

    <HomeDiv>
        <LandingPage />
    </HomeDiv>;