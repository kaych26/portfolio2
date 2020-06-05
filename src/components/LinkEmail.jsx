import React from 'react';
import styled from 'styled-components';
import icon from '../assets/icons/mail.svg';

const StyledImgLink = styled.section`
  font-family: 'Shadows Into Light Two', cursive;
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


export default function Github() {
  return (
    <StyledImgLink>
      <Link
        href="mailto:kaych26@gmail.com">
        <Img
          src={icon} alt='email' />
        
      </Link>
    </StyledImgLink>
  )
}

