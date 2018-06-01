import React, { Component } from 'react'

import styled from 'styled-components'

const MobileHomeMainDiv = styled.div `
    background-color: yellow;

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
        Mobile Home Park
      </MobileHomeMainDiv>
    )
  }
}
