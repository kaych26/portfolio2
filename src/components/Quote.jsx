import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce, fadeIn, swing, bounceIn, bounceInLeft, slideInDown, flipInX, rollIn, rotateInDownRight} from 'react-animations';
import size from './size';

const StyledQuote = styled.section`

  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  display: flex;
  
  @media( max-width: ${size.mobile}) {
    font-size: 1em;
  }
`;

const WordFrame = styled.div`
  display: flex;
  align-items: baseline;
`;

const ColorChar = styled.h2`
  animation: 3s ${keyframes`${fadeIn}`};
  animation: 8s ${keyframes`${swing}`} infinite;
  color: ${props => props.color};
  font-size: 1.8em;
  font-weight: bold;
  transform: rotate(${props => props.rotate});
  @media(max-width: ${size.mobile}) {
    font-size: 1.3em;
  }
`;

const Sign = styled.h2`
  font-weight: bold;
  padding: .3em .3em 0 .3em;
  align-self: center;
`;

const Word = styled.h3`
  animation: 5s ${keyframes`${bounceIn}`};
  font-size: .9em;
`;

export default function Quote() {
  return (
    <StyledQuote>
      
      <ColorChar color='#000'>
        "&nbsp;
      </ColorChar>
      <WordFrame>
        <ColorChar color='#f58105' rotate='-5deg'>
          I
        </ColorChar>

        <Word>
          nnovation
      </Word>
      </WordFrame>

      <Sign> + </Sign>
      
      <WordFrame>
        <ColorChar color='#0038FD' rotate='-6deg'>
          T
        </ColorChar>
        <Word>
          echnology 
      </Word>
      </WordFrame>
      <Sign> + </Sign>

      <WordFrame>
        <ColorChar color='#DB240F' rotate='8deg'>
          P
        </ColorChar>
        <Word>
        assion
      </Word>
      </WordFrame>

      <Sign> = </Sign>
      <WordFrame>
        <ColorChar color='#2FBA13' rotate='9deg'>
          S
        </ColorChar>
        <Word>
          olution 
      </Word>
      </WordFrame>
      <ColorChar color='#000'>
        "&nbsp;
      </ColorChar>
      
    </StyledQuote>
  )
}