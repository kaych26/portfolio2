import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import LinkLinkedin from './LinkLinkedin';
import LinkGithub from './LinkGithub';
import LinkResume from './LinkResume';
import LinkEmail from './LinkEmail';
import PostIt from './PostIt';
import size from './size';

const AboutPostitSection = styled.section`
  overflow: hidden;
`;

const PostitFrame = styled.div`
  padding: 2em;
`;

const LinkFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 1em;
  column-gap: 1em;
`;

const LinkTitle = styled.h2`
  text-align: center;
  font-size: .8em;
  letter-spacing: .1em;
`;

const PostitMsg = styled.h3`
  text-align: center;
  font-size: .95em;
  letter-spacing: .01em;
  color: #ff69b4;
  padding-top: 1em;

  @media (max-width: ${size.tablet}) {
    font-size: .9em;
    padding-top: .5em;
    letter-spacing: .01em;
    line-height: 1.3em;
  }

`;
const PostitDiv = styled.div`
  text-align: center;
  font-size: .9em;
`;

export default function AboutPostit() {
  const isMobile = useMediaQuery({ query: `(max-width: ${size.mobile})` })
  const isTablet = useMediaQuery({ query: `(max-width: ${size.tablet})` });
 
  let postSize = '240px';

  if (isTablet) {
     postSize = '190px';
  }

  return (
    <>
      <AboutPostitSection>

        <PostitFrame>
          <PostIt rotate='3deg' size={postSize}>
            {/* <PostIt rotate='3deg' size='188px'> */}

            <LinkFrame>
              <LinkTitle>
                <LinkResume />
              Resume
            </LinkTitle>

              <LinkTitle>
                <LinkLinkedin />
              LinkedIn
            </LinkTitle>

              <LinkTitle>
                <LinkGithub />
              Github
            </LinkTitle>

              <LinkTitle>
                <LinkEmail />
              Email
            </LinkTitle>
            </LinkFrame>

            {/* {!isTablet && */}
            <PostitMsg>
              "Keep hacking, keep exploring & SKY is the limit !"
            </PostitMsg>
            {/* } */}
          </PostIt>
        </PostitFrame>

      </AboutPostitSection>
    </>
  )
}