import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --heights: 50vh;
    --widths: 100%;
  }

  .active{
    display: inline-block;
  }

  .inactive{
    display: none;
  }

  .slides{
    height: var(--heights);
    width: var(--widths);
    position: relative;
  }

  .slide-image {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }

  .slide-title, .slide-text {
    width: 100%;
    height: 100%;
    color: white;
    position: absolute;
    text-align: center;
    top: 30%;
    z-index: 9;
  }

  .slide-text{
    top: 50%;
  }

  .prev, .next{
    cursor: pointer;
    z-index: 100;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -3rem;
    font-size: 30px;
    font-weight: bold;
    border-radius: 0 5px 5px 0;
  }

  .prev:hover, .next:hover{
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.5s ease-in;
  }

  .next{
    right: 0;
    border-radius: 5px 0 0 5px;
  }

  .all-dots{
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    top: 85%;
    justify-content: center;
    z-index: 200;
  }

  .dot{
    cursor: pointer;
    height: 1rem;
    width: 1rem;
    margin: 0 3px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    display: inline-block;
  }

  .active-dot, .dot:hover{
    background-color: rgba(255, 255, 255, 0.5);
  }

`;

export default GlobalStyle;