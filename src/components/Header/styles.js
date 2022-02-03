import styled from "styled-components";
import logo from '../../images/logo_transp.png';

export const HeaderContainer = styled.header`
    height: 75px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secundary};
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;        
    .tranparent{

    }
`;

export const Logo = styled.img`    
    height: 48px;
    width: 96px; 
`;

Logo.defaultProps = {
  src: logo,  
};

export const HeaderSearch = styled.header`
    /* height: 75px; */
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secundary};
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
    position: fixed;
    z-index: 999;
    width: 100%;
`;
