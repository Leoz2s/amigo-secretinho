import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  a, button {
    text-decoration: none;
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;