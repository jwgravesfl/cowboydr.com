import React, { Component } from 'react';
import {BrowserRouter as Router } from "react-router-dom";

// CSS 
import styled from 'styled-components'


// Site Layout Components
import Main from './routes/Main'

// Styled Components

const AppMainDiv = styled.div `
  padding: 0;
  margin: 0;

      
`
class App extends Component {
  render() {
    return (
      <AppMainDiv className="">
        <Router>
          <Main />
        </Router>
      </AppMainDiv>
    );
  }
}

export default App;
