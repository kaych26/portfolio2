import React from 'react';
import styled from 'styled-components';
import icon from '../assets/icons/github.svg';

const StyledImgLink = styled.section`
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: #000;
`;

const Img = styled.img`
  width: 35px;
`;

export default function LinkGithub(props) {
  let link = 'https://github.com/kaych26';

  if (props.link) {
    link = props.link;
  }

  return (
    <StyledImgLink>
      <Link
        href={link} target="_blank" rel="noopener noreferrer">
        <Img
          src={icon} alt='github' />
         {props.desc}
      </Link>

    </StyledImgLink>
  )
}