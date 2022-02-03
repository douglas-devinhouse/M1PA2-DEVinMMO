import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
    * {
        
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {        
        background: ${props => props.theme.colors.background};
        font-size : 14px;
        font-family: 'Montserrat', sans-serif;
        color: ${props => props.theme.colors.text};        
    }
`;