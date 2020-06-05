import React from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';
import size from './size';
import LinkResume from './LinkResume';

const StyledResumeSummary = styled.section`
  animation: 2s ${keyframes`${slideInDown}`};
  font-family: 'Montserrat', sans-serif;
  background-image: linear-gradient(rgba(246, 244, 241, 0.3), rgba(205, 205, 203, 0.3));
  word-spacing: .02em;

  @media (max-width: ${size.mobile}) {
    word-spacing: .01em;
  }
`;

const SummaryHeading = styled.h1`
  color: #3a4140;
  font-size: 2.3em;
  font-weight: 500;

  font-weight: 600;
  padding: 0 0 .2em 0em;

  @media (max-width: ${size.tablet}) {
    padding: 0 0 .4em 0;
  }

  @media (max-width: ${size.mobile}) {
    font-size: 1.7em;
    padding: 0 0 .4em 0;
  }
`;

const SummarySubHeading = styled.h2`

  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2em;
  padding-bottom: .5em;
  font-weight: 500;
 
  @media (max-width: ${size.mobile}) {
    font-size: .85em;
  }
`;

const Summary = styled.p`
  line-height: 1.15em;
  font-size: .95em;

  @media (max-width: ${size.mobile}) {
    font-size: .8em;
    line-height: 1.05em;
  }
`;

const Skills = styled.p`
  line-height: 1.25em;
  font-size: .9em;
  @media (max-width: ${size.mobile}) {
    font-size: .78em;
    line-height: 1.1em;
  }
`;

const Experience = styled.div`
  /* overflow: auto; */
`;

const Title = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1em;
  padding: .8em 0 0.15em 0;
  font-weight: 600;
  color: #175be3;

  @media (max-width: ${size.mobile}) {
    font-size: .8em;
  }
`;

const DescOuterFrame = styled.div`
  padding: .1em 0;

  @media (max-width: ${size.mobile}) {
    padding: .15em 0;
  }
`;

const CompanyFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: .2em;
`;

const Company = styled.h2`
  font-size: .95em;
  font-weight: 600;
  padding: .1em 0;

  @media (max-width: ${size.mobile}) {
    font-size: .8em;
    letter-spacing: .05em;
    word-spacing: .01em;
  }
`;

const Desc = styled.p`
  font-size: .9em;
  line-height: 1.13em;
  font-weight: normal;
  overflow: none;
  @media (max-width: ${size.mobile}) {
    font-size: .75em;
  }
`;

const Time = styled.h3`
  font-size: .85em;
  padding-right: 2.2em;

  @media (max-width: ${size.tablet}) {
    padding-right: 1em;
  }
  
  @media (max-width: ${size.mobile}) {
    font-size: .7em;
    padding-right: 0;
  }
`;

const Education = styled.h3`
  font-size: .95em;
  line-height: 1em;
  @media (max-width: ${size.mobile}) {
    font-size: .8em;
    padding: .15em 0;
  }
`;

const LinkResumeDiv = styled.div`
  padding-top: .9em;

  @media (max-width: ${size.tablet}) {
    /* padding-top: 3em; */
  }
 
`;

const Span = styled.span`
  font-size: .95em;
  font-weight: 600;
`;

const Span2 = styled.span`
  font-size: .9em;
`;

export default function ResumeSummary() {
  return (

    <StyledResumeSummary>
      <SummaryHeading>
        Kay Chan
      </SummaryHeading>
      <SummarySubHeading>
        Software Engineer | Web Developer | Finance Techology
      </SummarySubHeading>
      {/* <Summary>
        I am a versatile Software Engineer who holds 10+ years experience working as a Senior Programmer and Manager for major financial corporations. Whether it be writing intricate code or managing cross-functional technology teams, I excel at breaking down complex information into simplistic and intuitive solutions.
      </Summary> */}

      <Title>
        SKILLS
      </Title>

      <Skills>
        Reactjs, JavaScript, HTML, CSS, Nodejs, MongoDB, Mongoose, Express, Ruby, Ruby on Rails, Jest, RestfulAPI, Postgresql, C/C++, Python3, Perl, Shell, SQL, Oracle, Sybase, Github, SCCS, Unix, Linux, Unix Packaging Tools, WIX, Project- Management, Software Development Life Cycle (SDLC), AWS
      </Skills>

      <Title>
        EXPERIENCE
      </Title>

      <Experience>
        <DescOuterFrame>
          <CompanyFrame>
            <Company>
              Consultant
            </Company>
            <Time>
              2013-Present
            </Time>
          </CompanyFrame>

          <Desc>
            Automation Software Engineer
          </Desc>
        </DescOuterFrame>

        <DescOuterFrame>
          <CompanyFrame>
            <Company>
              Parental Leave
            </Company>
            <Time>
              2004 - 2013
            </Time>
          </CompanyFrame>
          <Desc>
            Mom
          </Desc>
        </DescOuterFrame>

        <DescOuterFrame>
          <CompanyFrame>
            <Company>
              Bank of New York
            </Company>
            <Time>
              1999 - 2003
            </Time>
          </CompanyFrame>
          <Desc>
            Senior Programmer / Manager, VP - Market Data Group
          </Desc>
        </DescOuterFrame>

        <DescOuterFrame>
          <CompanyFrame>
            <Company>
              Societe Generale / SG Cowen
            </Company>
            <Time>
              1998 - 1999
            </Time>
          </CompanyFrame>
          <Desc>
            Senior Programmer, Assistant Treasurer - Finance Techology Group
          </Desc>
        </DescOuterFrame>

        <DescOuterFrame>
          <CompanyFrame>
            <Company>
              Citi Group (Formerly Salomon Brothers)
            </Company>
            <Time>
              1994 - 1998
            </Time>
          </CompanyFrame>
          <Desc>
            Team Leader Global Develpment & Deployment Servies
          </Desc>
        </DescOuterFrame>
      </Experience>

      <Title>
        EDUCATION
      </Title>
      <CompanyFrame>
        <Education>
          <Span>General Assembly</Span> <br />
          <Span2>Software Engineering Immersive</Span2>
        </Education>

        <Time>
          New York, NY
        </Time>
      </CompanyFrame>

      <CompanyFrame>
        <Education>
          <Span>New York University</Span> <br/>
          <Span2>Bachelor of Arts in Computer Science</Span2>
        </Education>

        <Time>
          New York, NY
        </Time>
      </CompanyFrame>

      <CompanyFrame>
        <Education>
          <Span>AWS</Span><br />
          <Span2>Certified AWS Solutions Architect Associate</Span2>
        </Education>

        <Time>
          New York, NY
        </Time>
      </CompanyFrame>

      <LinkResumeDiv>
        <LinkResume imgOption='1'>
          View FULL Resume
        </LinkResume>
      </LinkResumeDiv>

    </StyledResumeSummary>
  )
}