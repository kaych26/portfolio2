import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import size from './size';


const LogoFrame = styled.div`
 

`;

const LogoKC = styled.h1`
  font-family: 'Fredericka the Great', cursive;
  color: #fff;
  /* color: #f9f9f9; */
  font-size: 35rem;
  letter-spacing: .01em;
  font-weight: 500;
  transform: rotate(-10deg);
`;

export default function Logo() {
  return (
    // <LogoFrame>
      <LogoKC>KC</LogoKC>
    // </LogoFrame>
  )

}