import React from 'react';
import styled from 'styled-components';

import heroImg from '../assets/BG_white_floor.png';

const BackgroundSection = styled.section`
  background-image: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(192,192,192,0.6)), url(${heroImg});
    background-repeat: no-repeat;
`;

export default function BackgroundSection() {

  return (
    <BackgroundSection>

    </BackgroundSection>
  )
}