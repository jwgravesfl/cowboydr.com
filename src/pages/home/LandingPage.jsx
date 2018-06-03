import React, { Component } from 'react'
import styled from 'styled-components';

import imgBG from '../../assets/waterTown1.jpg'
import logo from '../../assets/421CDLogo.png'

const LandingPageDiv = styled.div `
    min-height: 100vh;
    
    
        background-image: url(${imgBG});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    


    #imgWrapper {

      img {
        width: 45vw;
        margin-top: 20vh;
        margin-left: 8vw;
      }
    }

    .dsrDiv {
      width: 45vw;
      text-align: center;
      font-style: italic;
      margin-left: 7vw;
      margin-top: 1vw;
      text-shadow: .3vw .3vw #000000;
      font-family: 'Russo One', sans-serif;
      font-variant: small-caps;
      color: white;
      font-size: 4vw;
    }



`


export default class LandingPage extends Component {
  render() {
    return (
      <LandingPageDiv>
        <div className="bg">
          <div id="imgWrapper">
            <img src={logo} alt="" />
            <div className="dsrDiv">
            #drankin #smokin<br /> #raisinHell
            </div>
          </div>
        </div>
      </LandingPageDiv>
    )
  }
}
