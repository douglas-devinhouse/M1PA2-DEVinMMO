import styled from "styled-components";
import logo from "../../images/logo_transp.png";

export const HeaderContainer = styled.header`
  height: 75px;
  color: ${(props) => props.theme.colors.secundary};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to bottom, #333 3%, transparent 97%);

  .LinkTO {
    cursor: pointer;
    height: 50px;
    width: 120px;
    text-align: center;
    margin: 0 0 0 10px;
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 15px 25px;
    border-radius: 5px;
    text-decoration: none;
    background-color: #fff;
    color: #333;

    opacity: 1;
    transition: all ease 0.2s;
    :hover {
      opacity: 0.7;
    }
  }
`;

export const AppTitle = styled.h2`
  color: #fff;
`;

export const Logo = styled.img`
  height: 48px;
  width: 96px;
  margin: 15px 0 0 15px;
`;

Logo.defaultProps = {
  src: logo,
};

export const HeaderSearch = styled.header`
  top: 85px;
  height: 30px;
  display: inline-flex;
  position: fixed;
  z-index: 999;

  .InputSearch {
    margin-left: 25px;
    padding: 10 0 10 0;
    font-size: 20px;
    font-weight: 700;
  }
`;
