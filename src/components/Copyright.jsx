import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import size from './size';

const StyledCopyright = styled.h1`
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  padding-right: .8rem;
  text-align: center;

  @media (max-width: ${size.mobile}) {
    font-size: .7rem;
    padding: 0;
  }
`;

export default function Copyright() {
  const year = new Date().getFullYear();
  return (

    <StyledCopyright>
      React Website by Kay Chan <br/> &copy; {year}
    </StyledCopyright>
  )

}