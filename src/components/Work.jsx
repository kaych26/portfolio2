import React from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';

import theRecipeBox_img from '../assets/screens/theRecipeBox.png';
import theWeatherGenie_img from '../assets/screens/theWeatherGenie.png';
import supernovaGems_img from '../assets/screens/supernovaGems.png';
import cathay22_img from '../assets/screens/cathay22.png';
import superhero_img from '../assets/screens/superhero.png';
import Skills from './Skills';
import LinkGithub from './LinkGithub';
import size from './size';

const StyledWork = styled.section`
  animation: 2s ${keyframes`${slideInDown}`};
  overflow-x: hidden;
  padding: 0 2em;

  @media (max-width: ${size.tablet}) {
    padding: 0;
    overflow: auto;
  }
 
  @media (max-width: ${size.mobile}) {
    height: 100vh;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 1.6em;
  text-align: center;
  padding-bottom: 1em;
 
  @media (max-width: ${size.tablet}) {
    /* padding: 0; */
  }
`;

const ProjectOuterFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;

  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${size.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectImg = styled.img`
  width: 20em;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  text-align: center;
`;

const ProjectDesc = styled.p`
  /* width: 180px; */
  width: 370px;
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: .8em;
  padding: 0 1em 1.5em .3em;
  color: black;

  @media (max-width: ${size.tablet}) {
    padding: 0 1em 1em .5em;
  }
  `;

export default function Work() {
  const theRecipeBox_link = 'https://therecipesbox.netlify.app/';
  const cathay22_link = 'https://cathay-22.netlify.app/';
  const supernovaGems_link = 'https://supernova-gems.netlify.app/';
  const theWeatherGenie_link = 'https://theweathergenie.netlify.app/';
  const superhero_link = 'http://bumpy-expert.surge.sh/';

  return (
    <StyledWork>
      <ProjectTitle>PORTFOLIO</ProjectTitle>
      <ProjectOuterFrame>
        <Skills />
        <ProjectDiv>

          <ProjectLink href={theRecipeBox_link} target="_blank" rel="noopener noreferrer">
            <ProjectImg src={theRecipeBox_img} alt="theRecipeBox" />
            <ProjectDesc>
              <LinkGithub link='https://github.com/kaych26/theRecipeBox' />
            theRecipeBox, a full CRUD app for users to connect by sharing recipes and cooking stories.  Developed in
            React, React Router & Ruby on Rails.
          </ProjectDesc>
          </ProjectLink>
        </ProjectDiv>

        <ProjectDiv>

          <ProjectLink href={cathay22_link} target="_blank" rel="noopener noreferrer">
            <ProjectImg src={cathay22_img} alt="Cathay22" />
            <ProjectDesc>
              <LinkGithub link='https://github.com/CherelleTownes/cathay-22' />
            Cathay22, a React applicaton devloped with UX collaboration for a local Chinese restaurant.
          </ProjectDesc>
          </ProjectLink>
        </ProjectDiv>


        <ProjectDiv>

          <ProjectLink href={superhero_link} target="_blank" rel="noopener noreferrer">
            <ProjectImg src={superhero_img} alt="superhero" />
            <ProjectDesc>
              <LinkGithub link='https://github.com/kaych26/Superheros' />
            Superhero, developed using HTML, CSS and Marvel API.
          </ProjectDesc>
          </ProjectLink>
        </ProjectDiv>

        <ProjectDiv>

          <ProjectLink href={supernovaGems_link} target="_blank" rel="noopener noreferrer">
            <ProjectImg src={supernovaGems_img} alt="SupernovaGems" />
            <ProjectDesc>
              <LinkGithub link='https://github.com/Scott-PG/supernova-gems' />
  SuperNovaGems, a Fullstack ecommerce app developed in React and MongoDB.
</ProjectDesc>
          </ProjectLink>
        </ProjectDiv>

        <ProjectDiv>

          <ProjectLink href={theWeatherGenie_link} target="_blank" rel="noopener noreferrer">
            <ProjectImg
              src={theWeatherGenie_img} alt="theWeatherGenie" />
            <ProjectDesc>
              <LinkGithub link='https://github.com/kaych26/theWeatherGenie' />
            theWeatherGenie, developed using React, JavaScript, CSS and Openweather API.
          </ProjectDesc>
          </ProjectLink>
        </ProjectDiv>

      </ProjectOuterFrame>
    </StyledWork>
  );
}
