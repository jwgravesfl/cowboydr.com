import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'

import imgBusCard from '../../../../assets/businessCard.jpg'

import SignUp from '../../../../routes/SignUp'

const MobileBookingDiv = styled.div `
    text-align: center;

    .overlay {
    background-color: rgba(197, 209, 226, 1);
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    }

    .bookingGrid {
      
    }

    .bookingGridCell {
        
        img {
            padding: 4vh 0;
            width: 75%;
        }
    }

    .businessCardPhoneDiv {
        font-size: 6vw;
        font-family: 'Russo One', cursive;
        color: #000;
        text-shadow: .6vw .6vw #fff;
        margin-bottom: 2vh;
    }

    .contactForm {
        text-align: center;
    }
`

export const MobileBooking = () => 

<MobileBookingDiv id="Booking">
    <div className="overlay">
        <div className="bookingGrid">
            <ScrollAnimation delay={500} animateIn="zoomInLeft" className="bookingGridCell businessCard" >
                <img src={imgBusCard} alt="" />
                <ScrollAnimation delay={1500} animateIn="bounceInLeft" className="businessCardPhoneDiv">
                    Call J. Graves @ 813 720-0783
                </ScrollAnimation>
            </ScrollAnimation>
            <ScrollAnimation delay={1500} animateIn="zoomInRight" className="bookingGridCell contactForm" >
                <SignUp />
            </ScrollAnimation>
        </div>
    </div>
</MobileBookingDiv>
