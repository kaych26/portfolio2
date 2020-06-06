import React, { useState } from 'react';
import Styled from 'styled-components';
import NavRight from './NavRight';
import size from './size';

const StyledBurger = Styled.div`
  width: 2rem;
  height: 2.6rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 1;
  display: none;

  @media (max-width: ${size.tablet}) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  
  div {
    width: 2.6rem;
    height: 0.35rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'} ;
    border-radius: 12px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'}; 
    }
  } 
 }

`;

const NavBurger = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavRight 
        open={open} path={props.path}  
        onClick={() => setOpen(!open)}>
        </NavRight>
    </>
  )
}

export default NavBurger;
