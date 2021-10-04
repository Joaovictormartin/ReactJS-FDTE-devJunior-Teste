import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-Default: rgba(0, 214, 143, 1);
    --primary-Transparent: rgba(0, 214, 143, 0.48);
    --primary-Dark: rgba(0, 74, 69, 1);
    --primary-Gradient-500: #43e97b;
    --primary-Gradient-300: #38f9d7;

    --action-Default: rgba(255, 61, 113, 1);
    --action-Dark: rgba(219, 44, 102, 1);

    --types-Normal: rgba(196,192,180,1);
    --types-Bug: rgba(135,149,12,1);
    --types-Dark: rgba(65,56,49,1);
    --types-Dragon: rgba(115,97,209,1);
    --types-Electric: rgba(224,141,0,1);
    --types-Fairy: #rgba(226,159,230,1);
    --types-Fighting: rgba(133,40,22,1);
    --types-Fire: rgba(207,44,3,1);
    --types-Flying: rgba(143,164,255,1);
    --types-Ghost: #rgba(105,105,175,1);
    --types-Grass: rgba(103,175,50,1);
    --types-Ground: rgba(197,164,85,1);
    --types-Ice: rgba(180,237,248,1);
    --types-Poison: rgba(146,73,144,1);
    --types-Psychic: rgba(226,84,132,1);
    --types-Rock: rgba(94,73,28,1);
    --types-Steel: rgba(127,132,136,1);
    --types-Water: rgba(59,155,241,1);

    --neutral: rgba(255, 255, 255, 1);
    --neutral-200: rgba(247, 249, 252, 1);
    --neutral-300: rgba(237, 241, 247, 1);
    --neutral-400: rgba(228, 233, 242, 1);
    --neutral-500: rgba(197, 206, 244, 1);
    --neutral-600: rgba(143, 155, 179, 1);
    --neutral-700: rgba(46, 58, 89, 1);
    --neutral-800: rgba(34, 43, 69, 1);
    --neutral-900: rgba(25, 32, 56, 1);
    --neutral-1000: rgba(21, 26, 48, 1);
    --neutral-1100: rgba(16, 20, 38, 1);

    --modal-Background: rgba(0,0,0,0.35);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1440px) {
      font-size: 75%; //1rem = 12px
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
