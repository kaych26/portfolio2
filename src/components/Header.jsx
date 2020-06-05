import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import size from './size';

const HeaderSection = styled.section`
   /* overflow: hidden; */
`;

const Navbar = styled(Link)`
  overflow: hidden;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  padding: .6rem 2.3rem;
  color: ${props => props.color};
  background-color: rgba(252, 251, 248, 0.8);
  border-radius: 2em;
  /* z-index: 9999; */

  &:hover {
    border: 1px solid #ffa500;
  }
`;


export default function Header(props) {

  const isMobile = useMediaQuery({ query: `(max-width: ${size.mobile})` })
  let home = '#000';
  let about = '#000';
  let work = '#000';
  let resume = '#000'
  let showLogo = '0';

  if (props.location.pathname === '/') {
    home = '#ffa500';
    showLogo = '0';
  }
  else if (props.location.pathname === '/about' && !isMobile) {
    about = '#ffa500';
    showLogo = '1';
  }
  else if (props.location.pathname === '/work' && !isMobile) {
    work = '#ffa500';
    showLogo = '1'
  }
  else if (props.location.pathname === '/resume' && !isMobile) {
    resume = '#ffa500';
    showLogo = '1'
  }

  return (
    <HeaderSection>
      <Navbar to='/' color={home}>
        Home
      </Navbar>
      <Navbar to='/about' color={about}>
        About
      </Navbar>
      <Navbar to='/work' color={work}>
        Work
      </Navbar>
      <Navbar to='/resume' color={resume}>
        Resume
      </Navbar>
    </HeaderSection>
  )

}