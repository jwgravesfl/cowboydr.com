import React, { Component } from 'react'

import MobileNavBar from './mobnavbar/MobileNavBar'

import MobileLandingPage from './pages/MobileLandingPage'

import styled from 'styled-components'

const MobileHomeMainDiv = styled.div `
    
    display: grid;
        grid-template-areas:  "navBar"
                              "main";
        grid-template-columns: 1fr;
        grid-template-rows: 10vh 1fr;
        min-height:100vh;
`

export default class MobileHome extends Component {
  render() {
    return (
      <MobileHomeMainDiv>
        <MobileLandingPage />
        <MobileNavBar /> 
    
      {/*  
        <Booking />
        <Video />
        <Bio />
        <Press />
        <AllAccessPass />
      */}


      </MobileHomeMainDiv>
    )
  }
}
