import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
// import * as Scroll from 'react-scroll';
import { jello, flash, bounce, flipInY, rotateInDownRight, flip, fadeInRight, slideInUp, rotateIn, slideInDown, swing, zoomInDown, zoomIn, zoomInUp, slideIn, rotateInDownLeft, slideInLeft, slideInRight, fadeIn } from 'react-animations';

// import LinkResume from './LinkResume';
import size from './size';

const AboutMoiSection = styled.section`

  font-family: 'Montserrat', sans-serif;
  letter-spacing: .03em;
  padding: 1em;
  border-radius: 10px;
  overflow: hidden;
`;

const HelloDiv = styled.div`
  /* animation: 2s ${keyframes`${fadeIn}`}; */
`;

const Hello = styled.h1`
  /* color: #1e8ff7; */
  color: #ff69b4;
  font-size: 1.1em;
  font-weight: bold;
  letter-spacing: .1em;
`;

const Name = styled.h1`
  color: #3a4140;
  font-size: 3em;
  font-weight: bold;
  padding: .5em 0;

  @media (max-width: ${size.tablet}) {
    font-size: 2.9em;
  }
  @media (max-width: ${size.mobile}) {
    font-size: 2.5em;
  }
`;

const Title = styled.h1`
  color: #191b1b;
  font-size: 1.7em;
  padding-bottom: .7em;

  @media (max-width: ${size.tablet}) {
    font-size: 1.8em;
  }
  @media (max-width: ${size.mobile}) {
    font-size: 1.5em;
  }
`;

const AboutMeFirst = styled.div`
  animation: 2s ${keyframes`${slideInRight}`};
`;

const AboutMeSecond = styled.div`
  animation: 2s ${keyframes`${slideInLeft}`};
`;


const AboutMe = styled.p`
  background-image: linear-gradient( rgba(205, 205, 203, .5));
  /* animation: 1s ${keyframes`${slideInLeft}`}; */
  font-size: .95em;
  line-height: 1.5em;
  padding: .5em 0;

  @media (max-width: ${size.tablet}) {

  }
  @media (max-width: ${size.mobile}) {
    font-size: .9em;
    line-height: 1.1em;
  }
`;

const LinkResumeDiv = styled.div`
  padding: .8em 0 0 0;

  @media (max-width: ${size.mobile}) {
    padding: .2em 0 .8em 0;
  }
`;

const ScrollDiv = styled.div`
  padding-top: 3em;
`;


const ScrollTo = styled.a`
  /* animation: 4s ${keyframes`${flash}`}; */
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  color: #175be3;
  font-weight: 500;
  overflow: hidden;
  text-align: center;
`;

const Span = styled.span`
  color: #175be3;
  font-weight: 500;
`;

export default function AboutMoi() {
  const isMobile = useMediaQuery({ query: `(max-width: ${size.mobile})` })
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    setIsOpen(!isOpen);
  }

  return (

    <AboutMoiSection>

      <HelloDiv>
        <Hello>
          HI,  MY NAME IS
      </Hello>
        <Name>
          Kay Chan
        </Name>

        <Title>
          I'm a software engineer and web developer based in NYC.
        </Title>
      </HelloDiv>


      <div id="First">
        {!isOpen && (
          <AboutMeFirst>
            <AboutMe>
              Self-driven professional with broad technical skill-sets and communication skills.
          </AboutMe>

            <AboutMe>
              Worked 10+ years for major financial companies as a Unix <Span>C/C+ </Span> programmer and manager of Market Data team. Solid experience in <Span> software development life cycle</Span> and financial application.
          </AboutMe>

            <AboutMe>
              After becoming a mom, developed passion in web development using <Span>React</Span>, <Span>JavaScript</Span>, <Span>MongoDB</Span> and <Span>Ruby on Rails</Span>. Gained inspirations by communicating and interacting with people.  Love using technology to transform innovative ideas into products. Super rewarding when a product delivers positive impact and outcomes to others.
          </AboutMe>
          </AboutMeFirst>
        )}
      </div>

      <div id="Second">
        {isOpen && (
          <AboutMeSecond>
            <AboutMe>
              Developed core application to provide real-time <Span>Market Data</Span> to 24x7 institutional investors and online customers. Responsive and proactive in making preventative measures to ensure product <Span>stability</Span>.  Designed and implemented application for <Span>fault tolerance</Span> and <Span>high availability</Span>.
          </AboutMe>

            <AboutMe>
              Hobbies include <Span>cooking</Span>, <Span>traveling</Span>, <Span>gardening</Span> and <Span>building construction</Span>. Most would agreed, travel and food are great energy boost for the mind and body.
          </AboutMe>

            <AboutMe>
              Becoming a mom has brought many joy and challenges.  My daughter, Annie was a preemie baby.  Thanks to many professional guidance and supports, she is fully recovered and healthy!  This journey has taught me to stay open minded, reach out and connect.
          </AboutMe>
          </AboutMeSecond>
        )}
      </div>

      {
        !isOpen &&
        (

          <ScrollDiv>
            <ScrollTo href="#Second" onClick={(e) => handleOpen(e)}>
              MORE about me ...
          </ScrollTo>
          </ScrollDiv>
        )
      }

      {
        isOpen &&
        (
          <ScrollDiv>
            <ScrollTo href="#First" onClick={(e) => handleOpen(e)}>
              PREVIOUS
          </ScrollTo>
          </ScrollDiv>
        )
      }

    </AboutMoiSection >
  )
}