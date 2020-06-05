import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import size from './size';

const NavbarFrame = Styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* justify-content: space-between; */

  @media (max-width: ${size.tablet}) {
    flex-flow: column nowrap;
    /* background-color: #fff; */
    position: fixed;
    top: 0;
    right: 20px;
    /* width: 200px; */
    padding-top: 5rem;
    /* height: 100vh */
     /* display: none; */
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavLink = Styled(Link)`
  overflow: hidden;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  padding: .6rem 2.3rem;
  color: ${props => props.color};
  background-color: rgba(252, 251, 248, 0.8);
  border-radius: 2em;

  &:hover {
    border: 1px solid #ffa500;
  }
`;

const NavRight = (props) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${size.mobile})` })
  let home = '#000';
  let about = '#000';
  let work = '#000';
  let resume = '#000'
  
  if (props.path === '/') {
    home = '#ffa500';
  }
  else if (props.path === '/about' && !isMobile) {
    about = '#ffa500';
  }
  else if (props.path === '/work' && !isMobile) {
    work = '#ffa500';
  }
  else if (props.path === '/resume' && !isMobile) {
    resume = '#ffa500';
  }

  return (
    <NavbarFrame open={props.open}>

      <NavLink to='/' color={home}>
        Home
      </NavLink>
      <NavLink to='/about' color={about}>
        About
      </NavLink>
      <NavLink to='/work' color={work}>
        Work
      </NavLink>
      <NavLink to='/resume' color={resume}>
        Resume
      </NavLink>
    </NavbarFrame>
  )
}
export default NavRight;