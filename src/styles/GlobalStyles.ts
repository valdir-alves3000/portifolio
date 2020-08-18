import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    font-family: Roboto, sans-serif;    
  }

  h1 {
    font-family: Archivo, sans-serif;
  }

  :root {
    --color-primary: #2c2c2c;
    --color-secondary: #ffb633;
    --color-tertiary: #f9c450;
    --color-quartenary: #313131;
    --color-text: #fff;
  }
`;