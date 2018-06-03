import React from 'react'
import styled from 'styled-components'

import imgBG from '../../assets/saloon.jpg'

const BookingDiv = styled.div `
    background: rgba(0, 0, 255);
    min-height: 80vh;
    background-image: url(${imgBG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;

    .overlay {
    background-color: rgba(130, 134, 140, 0.7);
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    }

    .bookingContactInformation {
        width: 50vw;
        
        img {
            padding: 7vh 0;
            width: 75%;
        }
    }

    .bookingContactInformation {
        float: left;
    }

`

export const Video = () => 

<BookingDiv id="Demo">
    <div className="overlay">
        <div>
            Demo
        </div>
    </div>
</BookingDiv>
