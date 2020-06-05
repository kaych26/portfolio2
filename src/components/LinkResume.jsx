import React from 'react';
import styled from 'styled-components';
import icon from '../assets/icons/resume.svg';
import size from './size';

const StyledImgLink = styled.section`
  font-family: 'Shadows Into Light Two', cursive;
  letter-spacing: .1em;
  display: flex;
  justify-content: center;
  z-index: 8;
`;

const Link = styled.a`
  text-decoration: none;  
  color: #000;
  font-size: 1.2em;
  /* @media (max-width: ${size.mobile}) {
    font-size: 1em;
  } */
`;

const Img = styled.img`
  width: 35px;
`;

const NavResume = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: .7em;
  padding: .8em .8em;
 
  text-decoration: none;
  color: #fff;
  text-align: center;
  /* background-color: #878d8c; */
  background-color: #175be3;
  box-shadow: .2em .3em #888;
  border-radius: 10px;
  
  &:hover {
    background-color: #878d8c
  }
  &:active {
    background-color: #545d5c;
  }

  @media (max-width: ${size.mobile}) {
    font-size: .6em;
  }
`;

export default function LinkResume(props) {
  const link = 'https://drive.google.com/file/d/1sfGwaVvV0oGesZS_BXZrw4g_52H9ADab/view';
  return (
    <StyledImgLink>
      <Link
        href={link} target="_blank" rel="noopener noreferrer">
        {!props.imgOption &&
          <>
            <Img
              src={icon} alt='resume' />
            {props.desc}
          </>
        }
        {props.imgOption &&
          <NavResume>
            {props.children}
          </NavResume>
        }

      </Link>

    </StyledImgLink>
  )
}