import React from 'react'
import styled from 'styled-components'

import imgBG from '../../assets/hotelTrough.jpg'

import imgBusCard from '../../assets/businessCard.jpg'

const BookingDiv = styled.div `
    min-height: 70vh;
    background-image: url(${imgBG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;

    .overlay {
    background-color: rgba(197, 209, 226, .8);
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

<BookingDiv id="Booking">
    <div className="overlay">
        <div className="bookingContactInformation" >
            <img src={imgBusCard} alt="" />
        </div>
        <div className="bookingContactForm" >
            Booking Contact Form
        </div>
    </div>
</BookingDiv>
