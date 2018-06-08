import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'

import imgBG from '../../../../assets/waterTown1Mobile.jpg'
import logo from '../../../../assets/421CDLogo.png'

const MobileLandingPageDiv = styled.div `
        height: 100vh;
        background-image: url(${imgBG});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: grid;
        z-index: 9970;
    


    #imgWrapper {

      img {
        width: 100%;
        margin-top: 20vh;
        margin-bottom: 5vh;
      }
    }

    .dsrDiv {
        
        

    }

    .smokinDrankinGrid {
      display: grid;
      grid-template-rows: auto auto auto;
      grid-template-columns: auto;

  }

  .drankinSmokinraisinHellText {
    font-style: italic;
    text-shadow: .7vw .7vw #000000;
    font-family: 'Russo One', sans-serif;
    font-variant: small-caps;
    color: white;
    font-size: 18vw;
    text-align: center;
    padding: 1.5vh 0;

  }

    .drankin {
    }

    .smokin {
    }

    .raisinHell {
    }


`


export default class MobileLandingPage extends Component {
  render() {
    return (
      <MobileLandingPageDiv id="Home">
        <div className="bg">
          <div id="imgWrapper">
            <img src={logo} alt="" />
            
            
            <div className="dsrDiv">
              <div className="smokinDrankinGrid">
                <ScrollAnimation className="drankin drankinSmokinraisinHellText" delay={500} animateIn="fadeIn"> #drankin</ScrollAnimation>
                <ScrollAnimation className="smokin drankinSmokinraisinHellText" delay={1000} animateIn="fadeIn"> #smokin</ScrollAnimation>
                <ScrollAnimation className="raisinHell drankinSmokinraisinHellText" delay={1500} animateIn="fadeIn"> #raisinHell</ScrollAnimation>
              </div>
            </div> 
          </div>
        </div>
      </MobileLandingPageDiv>
    )
  }
}
