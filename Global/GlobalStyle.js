import styled, { createGlobalStyle } from 'styled-components';

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

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  font-size: clamp(1.1rem, 1.6vw, 1.6rem);
  background: hsla(0, 0%, 0%, 0.6);
  color: #fff;
  border: 0;
  padding: 0;
  padding: 0.8rem 1.5rem;
  transition: all 0.5s ease-in;
  border-radius: 0.5rem;

  :hover {
    background: hsla(0, 70%, 40%, 0.8);
  }

  @media screen and (max-width: 425px) {
    padding: 0.5 0.8rem;
  }
`;

export const ButtonLink = styled.a`
  border: 2px solid #fff;
  background: transparent;
  border-radius: 0.5rem;
  padding: 0.5rem 1.2rem;
  transition: all 0.5s ease-in;
  font-size: clamp(1.1rem, 1.5vw, 1.5rem);

  :hover {
    background: hsla(0, 70%, 40%, 0.8);
    border-color: hsla(0, 70%, 40%, 0.8);
  }

  @media screen and (max-width: 425px) {
    padding: 0.5 0.8rem;
  }
`;