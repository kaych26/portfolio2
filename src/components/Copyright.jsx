import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const StyledCopyright = styled.h1`
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  padding-right: .8rem;
 
`;

export default function Copyright() {
  const year = new Date().getFullYear();
  return (

    <StyledCopyright>
      React Website by Kay Chan &copy; {year}
    </StyledCopyright>
  )

}