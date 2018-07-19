import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'

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
        margin-top: 25vh;
        margin-left: 8vw;
      }
    }

    .dsrDiv {
        width: 45vw;
        margin-left: 7.5vw;
        margin-top: 4vh;
        text-align: center;
        

    }

    .smokinDrankinGrid {
      display: grid;
      grid-template-columns: auto auto;

  }

  .drankinSmokinraisinHellText {
    font-style: italic;
    text-shadow: .3vw .3vw #000000;
    font-family: 'Russo One', sans-serif;
    font-variant: small-caps;
    color: white;
    font-size: 5vw;
  }

    .drankin {
   
    }

    .smokin {
      
    
    }

    .raisinHell {
    
      
    }


`


export default class LandingPage extends Component {
  render() {
    return (
      <LandingPageDiv id="Home">
        <div className="bg">
          <div id="imgWrapper">
            <img src={logo} alt="" />
            
            
            <div className="dsrDiv">
              <ScrollAnimation className="raisinHell drankinSmokinraisinHellText" delay={1500} animateIn="fadeIn"> #raisinHell</ScrollAnimation>
            </div> 
          </div>
        </div>
      </LandingPageDiv>
    )
  }
}
