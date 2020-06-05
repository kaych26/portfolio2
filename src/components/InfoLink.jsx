import React from 'react';
import styled from 'styled-components';
import LinkLinkedin from './LinkLinkedin';
import LinkGithub from './LinkGithub';
import LinkResume from './LinkResume';
import LinkEmail from './LinkEmail';

const size = {
  mobile: '414px',
  tablet: '768px',
};

const StyledInfo = styled.section`
  width: 100%;
  padding: 3em 0 2.3em 0;

  display: flex;
  justify-content: center;

  @media (max-width: ${size.mobile}) {
    padding: 1.8em 0 1.5em 0;
  }
`;

const InfoContainer = styled.div`
  padding-bottom: 38px;
  display: flex;
  width: 30%;
  justify-content: space-between;

  @media (max-width: ${size.mobile}) {
    width: 60%;
    padding-bottom: 5em;
  }
`;

export default function InfoLinks() {
  return (
    <StyledInfo>
      <InfoContainer>
        <LinkResume />
        <LinkLinkedin />
        <LinkGithub />
        <LinkEmail />
      </InfoContainer>
    </StyledInfo>
  );
}
