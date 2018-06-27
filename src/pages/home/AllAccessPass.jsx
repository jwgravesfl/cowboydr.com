import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import imgPartyWagon from '../../assets/BandWagonLogo.png'

import styled from 'styled-components'

const BackStagePassDiv = styled.div `
      position: fixed;
      top: 1vh;
      left:1vh;
      text-align: right;

      a:link,
      a:visited,
      a:hover,
      a:active  {
        text-decoration:  none;
        font-weight:      bold;
        color: white;
        }

      img {
        width: 13vw;
      }

    .backStage {
      position: absolute;
      bottom: 22%;
      right: 25%;
      font-size: 1.2vw;
      border: white solid 1px;
      background: grey;
    }

`

export default class AllAccessPass extends Component {
  render() {
    return (
    
      <BackStagePassDiv>
        <Link to="/account">
            
            <img src={imgPartyWagon} alt="" />
            <div className="backStage">
              <div>
                Click Here!
              </div>
              </div>
        </Link>    
      </BackStagePassDiv>

      
    )
  }
}
