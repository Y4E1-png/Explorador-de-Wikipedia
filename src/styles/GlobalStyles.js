
import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #F7F5F0;
    color: #202522;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3 {
    font-family: 'Lora', serif;
    font-weight: 700;
    line-height: 1.2;
  }

  button, input, textarea, select {
    font: inherit;
  }

  main {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .credits {
  padding: 24px;
  color: #C9CFCC;
  background-color: #12251D;
  text-align: center;

    p {
      margin: 0;
      font-size: 13px;
    }

  }


  @media (max-width: 600px) {
    main {
      width: 100%;
    }
  }
`

