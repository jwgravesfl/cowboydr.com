import React from 'react'
import styled from 'styled-components'

import LandingPage from './LandingPage'
import {Booking} from './Booking'
import { Video } from './Video'
import { Bio } from './Bio'
import { Press } from './Press'


const HomeDiv = styled.div `
    min-height: '100vh',


`

export const Home = () => 

    <HomeDiv>
        <LandingPage />
        <Booking />
        <Video />
        <Bio />
        <Press />
    </HomeDiv>;