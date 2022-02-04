import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`    
  * {        
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {        
    background: ${(props) => props.theme.colors.background};
    font-size : 14px;
    font-family: 'Montserrat', sans-serif;        
    color: ${(props) => props.theme.colors.text};
  }
`;
