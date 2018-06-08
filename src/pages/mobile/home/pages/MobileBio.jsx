import React from 'react'
import styled from 'styled-components'

import imgBG from '../../../../assets/saloon.jpg'

import imgDW from '../../../../assets/deucesWild.jpg'
import imgJP from '../../../../assets/roughneckProfilePic.jpg'
import imgBP from '../../../../assets/bunniProfilePic.jpg'


import ScrollAnimation from 'react-animate-on-scroll'

const MobileBioDiv = styled.div `
    background: rgba(0, 0, 255);
    background-image: url(${imgBG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;

    .overlay {
        background-color: rgba(51, 55, 69, 0.9);
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
    }

    img {
        padding: 3vw;
    }

    .bioGrid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }

    .bioGridCells {
    }

    .bioGridCell2Header {
        text-align: center;
        font-size: 8vw;
        font-weight: bold;
        color: white;
        font-family: 'Asul', sans-serif;
        font-variant: small-caps;
        padding: 2vh 0;
    }

    .bioParagraphs {
        padding: 2vw;
        text-align: justify;
        font-family: 'Asul', sans-serif;
        color: white;
        font-size: 6vw;
    }

    .imgDW {
        width: 60vw;
        float: left;
    }

    .imgJP {
        width: 60vw;
        float: right;
    }

    .imgBP {
        width: 60vw;
        float: left;
    }

    .column2 {

    }
   
   
`

export const MobileBio = () => 

<MobileBioDiv id="Bio">
    <ScrollAnimation delay={1500} className="overlay" animateIn="fadeIn" >
    <div className="bioGridCell2Header" >Cowboy Drive Bio</div>
        <div className="bioGrid">
            <div>
                
            </div>
            <div className="bioGridCells">
                
                <div className="bioParagraphs" >
                    Willie Nelson once said, “If <img src={imgDW} alt="" className="imgDW" />a song was ever good, it’s still good.” With this is mind, Cowboy Drive utlizes all 
                    American musical genres. As a male and female duo, Roughneck and bunni bring a unique take on love, life and partying.
                </div>
                <div className="bioParagraphs" >
                    Roughneck and bunni are best when singing to or about one another. The love, passion and connection of these two 
                    people comes through in every song. Exclusively  acoustic, Cowboy Drive’s sets include songs from all decades and 
                    genres. The only prerequisite of a song to be played by Cowboy Drive is that it once were good, and it can be 
                    made to sound good stripped down to the roots.
                </div>
                <div className="bioParagraphs" >
                    Roughneck was born and raised in the West <img src={imgJP} alt="" className="imgJP" />Texas desert. Heavily influenced by Texas Country Music and the Texas Blues, 
                    Roughneck’s style also carries tints of southern rock and heavy metal. With multiple college degrees and with a full
                    time job as a corporate tax accountant, Roughneck is a unique blend of book smarts, musical talent and street smarts.
                </div>
            </div>
            
            <div className="bioGridCells column2">
                <div className="bioParagraphs" >
                    Coming from a family of highly successful <img src={imgBP} alt="" className="imgBP" />musicians, bunni was trained from an early age to take her spot on stage. 
                    Tall, beautiful and smart, bunni’s energy and emotion will overtake a room. Not only a true beauty, not only a 
                    true talent, not only a shining beacon of light, bunni at the young age of 21 is a seasoned professional. 
                </div>
                <div className="bioParagraphs" >
                    As a male and female country rock Americana duo, Cowboy Drive has a unique viewpoint on love, life and partying. 
                    Utilizing all that this great country has to offer, Cowboy Drive pulls influences from all genres of American 
                    music. The only test for a Cowboy Drive song is was it once good? Maybe, just maybe, Willie will stop by some 
                    time and listen while a great song or two of his is played. Regardless if Willie makes it or not, one thing is 
                    for sure. If one were to hang out with Cowboy drive he or she should expect to have a damn good time. <br /><br />Cowboy 
                    Drive<br />#drankin #smokin #raisinHell. 
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </ScrollAnimation>
</MobileBioDiv>
