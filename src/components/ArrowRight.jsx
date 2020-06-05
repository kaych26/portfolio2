import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrow_right_icon from '../assets/arrow_right.svg';
import arrow_left_icon from '../assets/arrow_left.svg';

import size from './size';

const ArrowFrame = styled.div``;

const ArrowImg = styled.img`
  width: 3.8rem;
`;

const ArrowLink = styled(Link)`
  padding: 0 8rem;
`;


export default function ArrowRight(props) {
  let nexturl = '/';
  if (props.location.pathname === '/') {
    nexturl = '/about';
  }
  else if (props.location.pathname === '/about') {
    nexturl = '/work';
  }
  else if (props.location.pathname === '/work') {
    nexturl = '/resume';
  }
  else if (props.location.pathname === '/resume') {
    nexturl = '/';
  }

  return (
    <ArrowLink to={nexturl}>
      <ArrowImg src={arrow_right_icon} />
    </ArrowLink>
  )
}