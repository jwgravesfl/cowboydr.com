import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid'
import styled from 'styled-components'

const MobileNavBarDiv = styled.div `
    

    .navOpenAndClose {
        position: fixed;
        top: 1em;
        right: 1em;
        z-index: 9999;
        font-size: 2em;
    }

    .navMenuGrid {
        display: grid;
        grid-template-rows: auto auto auto auto auto;
        position: fixed;
        top: 0;
        right: 0;
        background-color: rgba(51, 55, 69, 0.9);
        z-index: 9997;
        width: 100vw;
    }

    .cell {
        padding: 4vh 0;
        text-align: center;
        font-variant: small-caps;
        font-size: 10vw;
        font-family: 'Concert One', cursive;
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
    }

    .cell1 {
    }

    .cell2 {
    }

    .cell3 {
    }

    .cell4 {
    }

    .cell5 {
    }
`

const MenuOpen = () =>
    <div className="navMenuGrid">
        <div className="cell cell1">
            <a href="#Home">Home</a>
        </div>
        <div className="cell cell2">
            <a href="#Booking">Booking</a>
        </div>
        <div className="cell cell3">
            <a href="#Bio">Band Bio</a>
        </div>
        <div className="cell cell4">
            <a href="#Demo">Band Demos</a>
        </div>
        <div className="cell cell5">
            <a href="#Press">Press</a>
        </div>
    </div>

export default class MobileNavBar extends Component {
    state = {
        isOpen: false
    }

handleOpenClick = (event) => {
    this.setState({
        isOpen: true
    })
}

handleCloseClick = (event) => {
    this.setState({
        isOpen: false
    })
}

  render() {
      const isOpen = this.state.isOpen
    return (
    <MobileNavBarDiv>

    { !isOpen
        ?   <div>
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={this.handleOpenClick}
                    className="navOpenAndClose"
                />
                
            </div>
        :   <div>
                 <FontAwesomeIcon 
                icon={faTimes}
                onClick={this.handleCloseClick}
                className="navOpenAndClose"
                />
                <MenuOpen />
            </div>
    }
        
   

      </MobileNavBarDiv>
    )
  }
}
