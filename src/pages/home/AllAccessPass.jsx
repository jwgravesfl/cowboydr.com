import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import imgPartyWagon from '../../assets/Untitled-1-01.png'

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
        color: black;
        }

      img {
        width: 13vw;
      }

    .backStage {
      position: absolute;
      bottom: 2%;
      right: 2%;
      font-size: 1.2vw;
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
                Click Here for
              </div>
              <div>
                VIP All Access Pass!
              </div>
            </div>
        </Link>    
      </BackStagePassDiv>

      
    )
  }
}
