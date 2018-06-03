import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'

import imgBG from '../../assets/hotelTrough.jpg'
import imgBusCard from '../../assets/businessCard.jpg'

import ContactForm from '../forms/ContactForm'

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

    .bookingGrid {
        display: grid;
        grid-template-columns: auto auto;
  
    }

    .bookingGridCell {
        width: 50vw;
        img {
            padding: 7vh 0;
            width: 75%;
        }
    }

    .businessCard {
    }

    .contactForm {
    }

   

`

export const Booking = () => 

<BookingDiv id="Booking">
    <div className="overlay">
        <div className="bookingGrid">
            <ScrollAnimation delay={500} animateIn="fadeInLeft" className="bookingGridCell businessCard" >
                <img src={imgBusCard} alt="" />
            </ScrollAnimation>
            <ScrollAnimation delay={1500} animateIn="fadeInRight" className="bookingGridCell contactForm" >
                <ContactForm />
            </ScrollAnimation>
        </div>
    </div>
</BookingDiv>
