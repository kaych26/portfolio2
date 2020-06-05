import React from 'react';
import styled from 'styled-components';
import icon from '../assets/skills/octocat.png';

const StyledImgLink = styled.section`
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: #000;
`;

const Img = styled.img`
  width: 80px;
`;

export default function LinkGithub2(props) {
  const link = 'https://github.com/kaych26';
  return (
    <StyledImgLink>
      <Link
        href={link} target="_blank" rel="noopener noreferrer">
        <Img
          src={icon} alt='github'/>
        {props.desc}
      </Link>

    </StyledImgLink>
  )
}