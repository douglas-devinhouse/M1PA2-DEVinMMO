import styled from "styled-components";
import logo from '../../images/logo_transp.png';

export const Container = styled.div`
    height: 60px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secundary};
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
`;

export const MasterHeaderTitle = styled.h1`
    color: ;
`;

export const Logo = styled.img`    
    height: 48px;
    width: 96px; 
`;

Logo.defaultProps = {
  src: logo,  
};
