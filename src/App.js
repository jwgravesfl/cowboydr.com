import React, { Component } from 'react';

// CSS 
import styled from 'styled-components'


// Site Layout Components
import Main from './routes/Main'

// Styled Components

const AppMainDiv = styled.div `
  

      
`
class App extends Component {
  render() {
    return (
      <AppMainDiv className="">
        <Main />
      </AppMainDiv>
    );
  }
}

export default App;
