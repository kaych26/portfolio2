import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Logo from './Logo';

import About from './About';
import AboutMoi from './AboutMoi';
import AboutPostit from './AboutPostit';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Copyright from './Copyright';
import heroImg from '../assets/BG_white_floor.png';

const LayoutSection = styled.section`
  /* background */
  height: 100vh;
  
  background-image: linear-gradient(rgba(255, 255, 255, 0.4), rgba(192,192,192,0.6)), url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;

  z-index: -9;

  display: grid;
  grid-template-columns: 25% 50px auto 50px 25%;
  /* grid-template-rows: 4rem auto 4rem 1rem; */
  grid-template-rows: 60px 1fr 50px;
  grid-template-areas:
  'logo logo header header header'
  'postit body body body body'
  'leftarrow copyright copyright copyright  rightarrow'
  
`;

const HeaderSection = styled.section`
  overflow: hidden;
  padding-top: 2rem;
  grid-area: header;
  justify-self: end; 
  /* display: flex;
  justify-content: flex-end;
  align-items: center; */
  z-index: 99;
  
`;
const LogoDiv = styled.div`
  /* z-index: 1; */
  grid-area: logo;
  /* z-index: 1; */
`;

const PostitDiv = styled.div`
  grid-area: postit;
  padding-top: 13em;
`;

const AboutSection = styled.section`
  grid-area: body;
  z-index: 10;
  overflow: hidden;
  /* display: flex; */
  padding: 0 2em;

`;

const ArrowLeftDiv = styled.div`
    grid-area: leftarrow;
    justify-self: center;
`;

const ArrowRightDiv = styled.div`
    grid-area: rightarrow;
    justify-self: center;
`;

const CopyrightDiv = styled.div`
  grid-area: copyright;
  place-self: center;
`;


export default function Layout(props) {

  return (
    <LayoutSection>
      <HeaderSection>
        <Route
          path='/'
          render={route => (
            <Header {...route} />
          )}
        />
      </HeaderSection>

      <Route path='/about'>
        <>
          <LogoDiv>

            <Logo />
          </LogoDiv>

          <PostitDiv>
            <AboutPostit />
          </PostitDiv>

          <AboutSection>
            {/* <AboutPostit/> */}
            <AboutMoi />
          </AboutSection>
        </>
      </Route>

      {props.children}


      <Route
        path='/'
        render={route => (
          <>
            <ArrowLeftDiv>
              <ArrowLeft {...route} />
            </ArrowLeftDiv>

            <ArrowRightDiv>
              <ArrowRight{...route} />
            </ArrowRightDiv>

            <CopyrightDiv>
              <Copyright />
            </CopyrightDiv>
          </>
        )}
      />


    </LayoutSection>
  )
}