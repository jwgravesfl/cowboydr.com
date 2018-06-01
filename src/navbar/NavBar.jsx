
import React, { Component } from 'react'
import { Link } from "react-router-dom";

import styled from 'styled-components'

const NavBarMainDiv = styled.div `
    background-color: purple;
    position: fixed;
    top: 1%;
    right: 1%;
    width: 400px;
    height: 100px;

`

export default class NavBar extends Component {
  render() {
    return (
      <NavBarMainDiv>
        <div>
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/contactform">Contact Form</Link>
            </li>
          </ul>
        </div>
      </NavBarMainDiv>
    )
  }
}
