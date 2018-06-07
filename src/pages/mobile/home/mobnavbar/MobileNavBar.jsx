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
    }


`

const MenuOpen = () =>
    <div>
    <span className="cell">
    <a href="#Home">Home</a>
  </span>
  <span className="cell">
    <a href="#Booking">Booking</a>
  </span>
  <span className="cell">
    <a href="#Bio">Band Bio</a>
  </span>
  <span className="cell">
    <a href="#Demo">Band Demos</a>
  </span>
  <span className="cell">
    <a href="#Press">Press</a>
  </span>
    </div>

const MenuClosed = () =>
    <div>
        Menu Closed
    </div>

export default class MobileNavBar extends Component {
    state = {
        isOpen: false
    }

handleOpenClick = (event) => {
    this.setState({
        isOpen: false
    })
}

handleCloseClick = (event) => {
    this.setState({
        isOpen: true
    })
}

  render() {
      const isOpen = this.state.isOpen
    return (
    <MobileNavBarDiv>

    { isOpen
        ?   <div>
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={this.handleOpenClick}
                    className="navOpenAndClose"
                />
                <MenuOpen />
            </div>
        :   <div>
                 <FontAwesomeIcon 
                icon={faTimes}
                onClick={this.handleCloseClick}
                className="navOpenAndClose"
                />
                <MenuClosed />
            </div>
    }
        
   

      </MobileNavBarDiv>
    )
  }
}
