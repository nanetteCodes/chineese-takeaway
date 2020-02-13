import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner'


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto',arial,sans-serif;
    margin: 0;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
    </>
  );
}

export default App;
