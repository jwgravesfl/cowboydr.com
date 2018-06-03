
import React, { Component } from 'react'
import { Link } from "react-router-dom";

import styled from 'styled-components'

const NavBarMainDiv = styled.div `
    position: fixed;
    top: 1%;
    right: 1%;
    width: 40vw;
    border-top: .5vw solid white;
    border-bottom: .5vw solid white;
    padding: 1vw 0;
    font-size: 2vw;
    font-family: 'Concert One', cursive;
    text-align: center;
    font-variant: small-caps;
    text-shadow: .1vw .1vw #000000;
    z-index: 9998;
          
    a,
    a:link,
    a:visited {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }

    a:hover,
    a:active {
      color: black;
        text-decoration: none;
        font-weight: bold;
        text-shadow: .1vw .1vw #FFFFFF;
    }

    
    .cell {
      width: 50%;
      padding: 1vw;
    }
`

export default class NavBar extends Component {
  render() {
    return (
      <NavBarMainDiv>
    
          
            <span className="cell">
              <Link to="/">Home</Link>
            </span>
            <span className="cell">
              <Link to="/booking">Booking</Link>
            </span>
            <span className="cell">
              <Link to="/contactform">Band Bio</Link>
            </span>
            <span className="cell">
              <Link to="/contactform">Band Demos</Link>
            </span>
            <span className="cell">
              <Link to="/contactform">Press</Link>
            </span>
        
      </NavBarMainDiv>
    )
  }
}
