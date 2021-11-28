import { createGlobalStyle } from 'styled-components';

const hueColor = 240;

export const theme = {
    colors: {
        primaryColor: `hsl(${hueColor}, 69%, 61%)`,
        primaryColorAlt: `hsl(${hueColor}, 57%, 53%)`,
        bodyColor: `hsl(${hueColor}, 28%, 13%)`,
        titleColor: `hsl(${hueColor}, 8%, 95%)`,
        textColor: `hsl(${hueColor}, 8%, 75%)`,
        textColorLight: `hsl(${hueColor}, 8%, 65%)`,
        inputColor: `hsl(${hueColor}, 29%, 16%)`,
        containerColor: `hsl(${hueColor}, 29%, 16%)`,
        scrollBarColor: `hsl(${hueColor}, 12%, 48%)`,
        scrollThumbColor: `hsl(${hueColor}, 12%, 36%)`,
        buttonColor: ``,
        linkColor: ``
    },
    fontSize: {
        biggestFontSize: `5rem`,
        bigFontSize: `3rem`,
        mediumFontSize: `2rem`,
        normalFontSize: `1.5rem`,
        smallFontSize: `1.3rem`,
        buttonFontSize: `1.25rem`
    },
    bold: `700`
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    background-color: ${({ theme }) => theme.colors.bodyColor};
    color: ${({ theme }) => theme.colors.textColor};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    outline: 0;
    border: 0;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;
  }
`;