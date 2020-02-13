import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from './Navbar/Navbar';


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
      <h1>Chinese Takeaway</h1>
    </>
  );
}

export default App;
