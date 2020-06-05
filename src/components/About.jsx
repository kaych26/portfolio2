import React from 'react';
import styled from 'styled-components';
import AboutMoi from './AboutMoi';
import AboutPostit from './AboutPostit';

const AboutSection = styled.section`
  overflow: hidden;
  display: grid;
  grid-template-columns: 28% 70%;
  grid-template-rows: 1fr;

  align-items: end;
`;
const AboutPostitDiv = styled.div`
`;


export default function About() {

  return (
    <AboutSection>
      <AboutPostitDiv>
        <AboutPostit />
      </AboutPostitDiv>
      <AboutMoi />
    </AboutSection>

  )
}
