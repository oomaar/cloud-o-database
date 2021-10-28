import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: #111;
    color: #555;
  }

  h1,h2,h3,h4,h5,h6,p,a,div,span,button {
    ::selection {
      background: rgba(62, 6, 95, 1);
      color: #fff;
    }
  }
`;