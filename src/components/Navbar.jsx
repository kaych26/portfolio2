import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import NavBurger from './NavBurger';
import size from './size';

const Nav = styled.nav`
  padding: 0 5rem;
`;

const Navbar = (props) => {

  return (
    <Nav>
      <NavBurger path={props.location.pathname} />
    </Nav>
  )
}
export default Navbar;
