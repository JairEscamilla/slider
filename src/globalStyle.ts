import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --heights: 50vh;
    --widths: 100%;
  }
`;

export default GlobalStyle;