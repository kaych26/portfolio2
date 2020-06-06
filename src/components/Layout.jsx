import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Logo from './Logo';

import Home from './Home';
import AboutMoi from './AboutMoi';
import Work from './Work';
import ResumeSummary from './ResumeSummary';
import AboutPostit from './AboutPostit';

import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Copyright from './Copyright';
import heroImg from '../assets/BG_white_floor.png';
import size from './size';

const LayoutSection = styled.section`
  /* background */
  height: 100vh;
  overflow: hidden;
  
  background-image: linear-gradient(rgba(255, 255, 255, 0.4), rgba(192,192,192,0.6)), url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;

  z-index: -9;

  display: grid;
  grid-template-columns: 25% 50px auto 50px 25%;
  grid-template-rows: 60px 1fr 50px;
  grid-template-areas:
  'logo logo header header header'
  'body body body body body'
  'leftarrow copyright copyright copyright  rightarrow'

  /* @media (max-width: ${size.mobile}) {

  } */
`;

const HeaderSection = styled.section`
  /* overflow: hidden; */
  padding-top: 2rem;
  grid-area: header;
  justify-self: end; 
  z-index: 99;
  
`;
const LogoDiv = styled.div`
  /* z-index: 1; */
  grid-area: logo;
  /* z-index: 1; */
`;

const PostitDiv = styled.div`
  grid-area: 2 / 1 / 3 /3 ;
  padding-top: 13em;
  overflow: hidden;

/* @media (max-width: ${size.tablet}) {
  grid-area: 2/ 1/ 3/ 3;
} */

  @media (max-width: ${size.mobile}) {
    display:none;
  }
`;

const BodyHome = styled.section`
  grid-area: body;
  z-index: 10;
  overflow: hidden;
  @media (max-width: ${size.tablet}) {
      padding-top: 3.8em;
  }
`;

const BodyAbout = styled.section`
  grid-area: 2 /3/ 3/ 6 ;

  z-index: 10;
  overflow: hidden;
  padding-right: 6em;
  align-self: center;

  @media (max-width: ${size.tabletH}) {
    grid-area: 2/ 3/ 3/ 6;
    padding: 0%;
  }

  @media (max-width: ${size.mobile}) {
    grid-area: 2/ 1/ 3/ 6;
    padding: 0;
  }
`;

const BodyResume = styled.section`
  grid-area: 2 /3/ 3/ 6 ;
  z-index: 10;
  overflow: hidden;
  align-self: center;

  padding: 0 1.8em;

  @media (max-width: ${size.tablet}) {
   
  }
  @media (max-width: ${size.mobile}) {
    grid-area: 2/ 1/ 3/ 6;
    padding: 0 .6em;
  }
 
`;

const BodyWork = styled.section`
  grid-area: 2 /1/ 3/ 6 ;
  z-index: 10;
  overflow: hidden;
  @media (max-width: ${size.tablet}) {
    align-self: center;
  }
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
  /* justify-self: center; */
  place-self: center;
`;


export default function Layout(props) {

  return (
    <LayoutSection>
      <HeaderSection>
        <Route
          path='/'
          render={route => (
            <>
              <Navbar {...route} />
            </>
          )}
        />
      </HeaderSection>


      <Route exact path='/'>
        <BodyHome>
          <Home />

        </BodyHome>

      </Route>
      <Route exact path='/about'>
        <>
          <LogoDiv>
            <Logo />
          </LogoDiv>

          <PostitDiv>
            <AboutPostit />
          </PostitDiv>

          <BodyAbout>
            <AboutMoi />
          </BodyAbout>
        </>
      </Route>

      <Route exact path='/work'>
        <>
          <LogoDiv>
            <Logo />
          </LogoDiv>
          <BodyWork>
            <Work />
          </BodyWork>
        </>
      </Route>

      <Route exact path='/resume'>
        <>
          <LogoDiv>
            <Logo />
          </LogoDiv>
          <PostitDiv>
            <AboutPostit />
          </PostitDiv>
          <BodyResume>
            <ResumeSummary />
          </BodyResume>
        </>
      </Route>

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