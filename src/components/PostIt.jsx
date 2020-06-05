import React from 'react';

import styled, { keyframes } from 'styled-components';
import size from './size';
import { slideInDown, swing, fadeIn } from 'react-animations';

const StyledPostIt = styled.section`
  font-family: 'Shadows Into Light Two', cursive;
  position: relative;
`;

const PostItQuote = styled.p`
  color: #333;
  position: relative;
  width: ${props => props.size};
  height: ${props => props.size};
  /* width: 200px;
  height: 200px; */
  margin: 0 auto;
  padding: .8em;
  font-size: 1.16em;
  line-height: 1.2em;
  letter-spacing: .1em;
  box-shadow: 0 10px 10px 2px rgba(0,0,0,0.3);

  background: #eae672;
  transform: rotate(${(props) => props.rotate});

  /* @media (max-width: ${size.tablet}) {
    padding: .8em .2em .2em .2em;
    font-size: 1em;
    line-height: 1em;
    letter-spacing: .1em;
  } */

`;

// create small metal part of the pin
const PostItPin = styled.i`

  background-color: #aaa;
  display: block;
  height: 32px;
  width: 2px;
  position: absolute;
  left: 50%;
  top: -16px;
  z-index: 1;

/* using gradient and box shadow to make the ball top of the pin and its shadow */
  :after {
    background-color: #A31;
    background-image: radial-gradient()(25% 25%, circle, hsla(0, 0%, 100%, .3), hsla(0, 0%, 0%, .3));

    border-radius: 50%;

    box-shadow: inset 0 0 0 1px hsla(0,0%, 0%, .1), 
    inset 3px 3px 3px hsla(0, 0%, 0%, .2),
    inset -3px -3px 3px hsla(0, 0%, 0%, .2),
    23px 20px 3px hsla(0, 0%, 0%, .15);

    content: '';
    height: 10px;
    left: -3px;
    position: absolute;
    top: -8px;
    width: 10px;
  }

  /* rotate the shadow of the metal part of the pin */

  :before {
    background-color: hsla(0, 0%, 0%, 0.1);
    box-shadow: 0 0 .25em hsla(0,0%, 0%, .1);
    content: '';
    height: 24px;
    width: 2px;
    left: 0;
    position: absolute;
    top: 8px;

    transform: rotate(57.5deg);
    transform-origin: 50% 100%;
  }
`;

export default function PostIt(props) {
  const size = props.size ? props.size : '200px';
  return (
    <StyledPostIt>
      <PostItQuote
        rotate={props.rotate}
        size={size}>
      <PostItPin/>
      {props.children}

      </PostItQuote>
    </StyledPostIt>
  )
}