import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce, bounceInLeft, flip, swing, slideInDown, slideInLeft, slideInRight, fadeInRightBig, fadeInLeft, rollIn, rotateInDownLeft } from 'react-animations';

import react_img from '../assets/skills/react2.png';
import rails_img from '../assets/skills/rails.svg';
import postgresql_img from '../assets/skills/postgresql_elephant.png';
import nodejs_img from '../assets/skills/nodejs.svg';
import mongodb_img from '../assets/skills/mongodb.svg';
import javascript_img from '../assets/skills/javascript.png';
import html_img from '../assets/skills/html5.svg';
import cplus_img from '../assets/skills/cplus.png';
import css_img from '../assets/skills/css.svg';
import mongoose_img from '../assets/skills/mongoose.png';

import LinkGithub2 from './LinkGithub2';

const StyledSkills = styled.section`
  animation: 3s ${keyframes`${rotateInDownLeft}`} ;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-self: center;
  background-image: linear-gradient(rgba(246, 244, 241, 0.3), rgba(205, 205, 203, 0.3));
  z-index: 5;
`;

const SkillFrame = styled.div`
  /* animation: 5s ${keyframes`${bounceInLeft}`} ; */
  animation: 3s ${keyframes`${bounce}`} ;
  padding: 0.2em .7em;
`;

const GithubFrame = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: .8em;
  animation: 8s ${keyframes`${swing}`} infinite;
`;

export default function Skills() {
  return (
    <StyledSkills>

      <SkillFrame>
        <img
          src={react_img} alt='react' width='50px' />
      </SkillFrame>

      <SkillFrame>
        <img
          src={javascript_img} alt='js' width='40px' />
      </SkillFrame>

      <SkillFrame>
        <img
          src={html_img} alt='html' width='33px' />
      </SkillFrame>

      <SkillFrame>
        <img
          src={css_img} alt='css' width='33px' />
      </SkillFrame>

      <SkillFrame>
        <img
          src={nodejs_img} alt='nodejs' width='65px' />
      </SkillFrame>

      <SkillFrame>
        <img
          src={mongodb_img} alt='mongoDB' width='120px' />
      </SkillFrame>

      <SkillFrame>
        <img
          src={postgresql_img} alt='postgresql' width='40px' />
      </SkillFrame>

      <SkillFrame>
        <img
          src={mongoose_img} alt='mongoose' width='80px' />
      </SkillFrame>

      <SkillFrame>
        <img
          src={rails_img} alt='rails' width='70px' />
      </SkillFrame>

      <SkillFrame>
        <img
          src={cplus_img} alt='c++' width='70px' />
      </SkillFrame>

      <GithubFrame>
        <LinkGithub2 />
        Kay's Github
        {/* <img
          src={github_img} alt='git' width='50px' /> */}
      </GithubFrame>

    </StyledSkills >
  )
}