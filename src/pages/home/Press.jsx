import React from 'react'
import styled from 'styled-components'

import imgBG from '../../assets/oldBoardedUpTown.png'

const PressDiv = styled.div `
    background: rgba(0, 0, 255);
    min-height: 50vh;
    background-image: url(${imgBG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;

    .overlay {
    background-color: rgba(204, 204, 204, 0.5);
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    }
   
`

export const Press = () => 

<PressDiv>
    <div className="overlay">
        <div>
            Video
        </div>
    </div>
</PressDiv>
