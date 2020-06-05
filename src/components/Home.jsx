import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { merge, bounceInLeft, zoomInRight, flip, wobble, flipInX, slideInLeft, slideInRight, rollIn, tada, zoomInDown, fadeInDownBig, fadeIn } from 'react-animations';
import Quote from './Quote';
import InfoLinks from './InfoLinks';
import size from './size';


const StyledHome = styled.section`
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  /* display: absolute; */
`;

const HomeTitleLink = styled(Link)`
  font-family: 'Fredericka the Great', cursive;
  font-size: 3.9em;
    
  padding: 1.8em 0 .5em 0;
  letter-spacing: 0.2em;
  text-align: center;
  text-decoration: none;
  color: black;

  @media (max-width: ${size.mobile}) {
    font-size: 2.3em;
    padding: 2.8em 0 .6em 0;

  }
`;

const HomeSubTitleFrame = styled.div`
  display: flex;
  @media (max-width: ${size.mobile}) {
    display: block;
    padding-bottom: 1.5em;
  }

`;

const SubTitleDivider = styled.h3`
  @media (max-width: ${size.mobile}) {
    visibility: hidden;
  }
`;


const HomeSubTitle = styled.h2`
  animation: ${props => props.time} ${keyframes`${zoomInRight}`};
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.3em;
  letter-spacing: 0.1em;
  padding-bottom: 1.5em;
  @media (max-width: ${size.mobile}) {
    font-size: 1em;
    padding-bottom: 0em;
    letter-spacing: .05em;
  }
`;

export default function Home() {
  return (
    <>
      <StyledHome>
        <HomeTitleLink to="/about">Kay Chan</HomeTitleLink>
        <HomeSubTitleFrame>
          <HomeSubTitle time='1s'>
            Software Engineer
          </HomeSubTitle>
          <SubTitleDivider>
            &nbsp;&nbsp;|&nbsp;&nbsp;
          </SubTitleDivider>
          <HomeSubTitle time='2s'>
            Web Developer
          </HomeSubTitle>
          <SubTitleDivider>
            &nbsp;&nbsp;|&nbsp;&nbsp;
          </SubTitleDivider>
          <HomeSubTitle time='3s'>
            Finance Techology
          </HomeSubTitle>

        </HomeSubTitleFrame>

        <InfoLinks />
        <Quote />
        
      </StyledHome>
    </>
  );
}
