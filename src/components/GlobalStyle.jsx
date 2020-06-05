import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    ${'' /* height: 100vh; */}
  } 

  body,
  #root {
    ${'' /* height: 100vh; */}
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;