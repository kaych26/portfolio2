import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
import GlobalStyle from './components/GlobalStyle';
import Layout from './components/Layout';

function initializeReactGA() {
  ReactGA.initialize('UA-168799863-1');
  ReactGA.pageview('/homepage');
}

function App() {
  return (
    <>
      <GlobalStyle/>
      <Layout/>
    </>
    
  );
}
export default App;
