import React from 'react'
import styled from 'styled-components'

import imgBG from '../../assets/oldWestStreet.jpg'

import imgBusCard from '../../assets/businessCard.jpg'

const BookingDiv = styled.div `
    background: rgba(0, 0, 255);
    min-height: 70vh;
    background-image: url(${imgBG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;

    .overlay {
    background-color: rgba(0, 0, 204, 0.65);
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 70vh;
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

export const Booking = () => 

<BookingDiv>
    <div className="overlay">
        <div className="bookingContactInformation" >
            <img src={imgBusCard} alt="" />
        </div>
        <div className="bookingContactForm" >
            Booking Contact Form
        </div>
    </div>
</BookingDiv>
