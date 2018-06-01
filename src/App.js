import React, { Component } from 'react';

// CSS 
import styled from 'styled-components'


// Site Layout Components
import Main from './routes/Main'

// Styled Components

const AppMainDiv = styled.div `
  .navBar {
    grid-area: navBar;
    background-color: red;
  }

  .main {
    grid-area: main;
    background-color: yellow;
    z-index: 1;
  }

      display: grid;
        grid-template-areas:  "navBar"
                              "main";
        grid-template-columns: 1fr;
        grid-template-rows: 10vh 1fr;
        min-height:100vh;
        background-color: green;
`
class App extends Component {
  render() {
    return (
      <AppMainDiv className="">
        <Main className="main"/>
      </AppMainDiv>
    );
  }
}

export default App;
