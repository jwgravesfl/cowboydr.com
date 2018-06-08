import React, { Component } from 'react'

import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'

import YouTube from 'react-youtube'
import imgBG from '../../../../assets/originalBandPhoto.jpg'

const MobileVideoDiv = styled.div `
   
    text-align: center;

    background-image: url(${imgBG});
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
    background-color: black;

    .youtubeFrame {
        width: 100%;
    }

`

export default class MobileVideo extends Component {
  render() {
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        color: 'blue',
      }
    };

    return (
      <MobileVideoDiv id="Demo">
        <ScrollAnimation delay={1000} animateIn="fadeIn" >
          <YouTube
            className="youtubeFrame"
            videoId="A6pjKnkeoME"
            opts={opts}
          />
        </ScrollAnimation>
      </MobileVideoDiv>
    )
  }
}