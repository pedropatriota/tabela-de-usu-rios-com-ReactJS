import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  *:focus{
    outline:none;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background:#f2f2f2;
    font-family: 'roboto', sans-serif;
    color:#666;    
    overflow-x: hidden;
  }
  ul {
    list-style: none;
  }
  button {
    font-family: 'roboto', sans-serif;    
    border-radius: 4px;
    cursor: pointer;
  }
  
  input, select {
    font-family: 'roboto', sans-serif;
    color:#666;    
  }
  h1, h2, h3, h4, h5, h6, p {
    font-family: 'roboto', sans-serif;
  }
`;
