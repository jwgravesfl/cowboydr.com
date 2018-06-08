import React, { Component } from 'react'

import MobileNavBar from './mobnavbar/MobileNavBar'
import MobileLandingPage from './pages/MobileLandingPage'
import {MobileBooking} from './pages/MobileBooking'

import styled from 'styled-components'

const MobileHomeMainDiv = styled.div `
    
    
`

export default class MobileHome extends Component {
  render() {
    return (
      <MobileHomeMainDiv>
        <MobileLandingPage />
        <MobileBooking />
        <MobileNavBar /> 
       
      
        {/*  
        <Video />
        <Bio />
        <Press />
        <AllAccessPass />
      */}


      </MobileHomeMainDiv>
    )
  }
}
