import React from 'react'
import styled from 'styled-components'

import LandingPage from './LandingPage'
import {Booking} from './Booking'
import Video from './Video'
import { Bio } from './Bio'
import { Press } from './Press'
import NavBar from '../../navbar/NavBar'
import AllAccessPass from './AllAccessPass'



const HomeDiv = styled.div `

`

export const Home = () => 

    <HomeDiv>
        <LandingPage />
        <Booking />
        <Video />
        <Bio />
        <Press />
        <AllAccessPass />
        <NavBar />
    </HomeDiv>;