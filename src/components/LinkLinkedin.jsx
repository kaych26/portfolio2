import React from 'react';
import styled from 'styled-components';
import icon from '../assets/icons/linkedin.svg';

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

export default function LinkLinkedin(props) {
  const link = 'https://www.linkedin.com/in/kaych26/';
  return (
    <StyledImgLink>
      <Link
        href={link} target="_blank" rel="noopener noreferrer">
        <Img
          src={icon} alt='linkedin' />
        {props.desc}
        {/* LinkedIn */}
      </Link>

    </StyledImgLink>
  )
}