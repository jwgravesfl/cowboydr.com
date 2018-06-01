import React, { Component } from 'react'
import styled from 'styled-components';

import img from '../../assets/oldWestStreet.jpg'

const LandingPageDiv = styled.div `
    min-height: 100vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
`


export default class LandingPage extends Component {
  render() {
    return (
      <LandingPageDiv>
        Landing Page
      </LandingPageDiv>
    )
  }
}
