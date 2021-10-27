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
    background-color: #111;
    color: #555;
  }
`;