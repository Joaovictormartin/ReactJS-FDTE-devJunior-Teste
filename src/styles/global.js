import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --green-500: #43e97b;
    --green-300: #38f9d7;

    --white: #ffffff;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1280px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, html {
    height: 100vh;
    scroll-behavior: smooth;
  }

  body, 
  input, 
  textarea, 
  button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
