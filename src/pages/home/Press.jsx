import React from 'react'
import styled from 'styled-components'

import ScrollAnimation from 'react-animate-on-scroll'

import imgQuote1 from '../../assets/pressQuote1.jpg'
import imgQuote2 from '../../assets/pressQuote2.jpg'
import imgQuote3 from '../../assets/pressQuote3.jpg'
import imgQuote4 from '../../assets/pressQuote4.jpg'

const PressDiv = styled.div `
    background-position: center;
    text-align: center;

    .overlay {
        background-color: white;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
    }

    .pressGrid {
        display: grid;
        grid-template-columns: 5vw 1fr 1fr 1fr 1fr 5vw;
        grid-template-rows: auto;
        text-align: center;
    }

    .pressColumns {
        text-align: center;

        img {
            width: 80%;
            margin-left: 10%;
            margin-top: 15%;
        }
    }
   
`

export const Press = () => 

<PressDiv id="Press">
    <div className="overlay pressGrid">
        <div>
            
        </div>
        <ScrollAnimation delay={ 500 } animateIn="bounceInUp" className="pressColumns" >
            <img src={imgQuote1} alt="" />
        </ScrollAnimation>
        <ScrollAnimation delay={ 1000 } animateIn="bounceInUp" className="pressColumns" >
            <img src={imgQuote2} alt="" />
        </ScrollAnimation>
        <ScrollAnimation delay={ 1500 } animateIn="bounceInUp" className="pressColumns" >
            <img src={imgQuote3} alt="" />
        </ScrollAnimation>
        <ScrollAnimation delay={ 2000 } animateIn="bounceInUp" className="pressColumns" >
            <img src={imgQuote4} alt="" />
        </ScrollAnimation>
        <div>
            
        </div>
    </div>
</PressDiv>
