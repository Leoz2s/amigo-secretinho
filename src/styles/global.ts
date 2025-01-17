import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
  }

  a, button {
    text-decoration: none;
    cursor: pointer;
    transition: filter 0.2s;
  }

  button, input {
    border: none;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;