import React, { useContext } from 'react';
import Switch from "react-switch";
import {HeaderContainer, Logo} from './styles';
import { ThemeContext } from 'styled-components';
import { Search } from './Search';

export const MasterHeader = ({toggleTheme, pageTitle, transparent}) => {
  const { colors, title } = useContext(ThemeContext);     
    
  return (    
    <HeaderContainer>
        <Logo />
        <h1>DEVinMMO</h1>
        <Search />
        <div>
            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={30}
                width={60}
                onColor={colors.switchOn}

                checkedHandleIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 15,
                        color: "orange",
                        paddingRight: 2
                      }}
                    >
                      <img alt='Dark Mode' src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-space-prettycons-lineal-color-prettycons.png"/>
                    </div>
                }
                uncheckedHandleIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 15,
                        color: "orange",
                        paddingRight: 2
                      }}
                    >
                      <img alt='Light Mode' src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-sun-weather-justicon-flat-justicon-1.png"/>
                    </div>
                }                    
            />                
        </div>            
    </HeaderContainer>
  )
};