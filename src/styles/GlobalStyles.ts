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
    --primary: #2c2c2c;
    --secondary: #ffb633;
    --tertiary: #f9c450;
    --quartenary: #313131;
    --text: #fff;
    --shadow: rgba(0, 0, 0, 0.1);

    .ligth {
      --primary: #fff;     
      --quartenary: #f5f5f5;
      --text: #000;
    }
  }
`;
