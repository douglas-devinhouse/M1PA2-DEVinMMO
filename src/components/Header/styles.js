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

    .LinkTO {
        cursor: pointer;
        width: 120px;
        text-align: center;
        margin: 0 0 0 45px;        
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        padding: 15px 25px;
        border-radius: 5px;
        text-decoration: none;    
        background-color: #FFF;
        color: #333;
        
        opacity: 1;
        transition: all ease 0.2s;
        :hover{
            opacity: 0.7;
        }
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
    top: 75px;
    height: 35px;   
    display: inline-flex;    
    position: fixed;
    z-index: 999;

    .InputSearch{
        width: 100vw;
        height: 100%;
        font-size: 20px;
        font-weight: 700;
    }
`;
