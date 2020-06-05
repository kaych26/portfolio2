import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrow_left_icon from '../assets/arrow_left.svg';

import size from './size';

const ArrowImg = styled.img`
  width: 3.5rem;
`;

const ArrowLink = styled(Link)`
  padding: 0 8rem;
`;

export default function ArrowLeft(props) {

  let prevurl = '/';
  if (props.location.pathname === '/') {
    prevurl = '/resume';
  }
  else if (props.location.pathname === '/about') {
    prevurl = '/';
  }
  else if (props.location.pathname === '/work') {
    prevurl = '/about';
  }
  else if (props.location.pathname === '/resume') {
    prevurl = '/work';
  }

  return (
    <ArrowLink to={prevurl}>
      <ArrowImg src={arrow_left_icon} />
    </ArrowLink>
  )
}