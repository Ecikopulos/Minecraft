import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Barlow', sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: ${({theme}) => theme.colors.background};
  }

  body.is-active {
    height: 100vh;
    overflow-y: hidden;
  }

  a, button {
    font-family: 'Barlow', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
