import React, { useContext } from 'react';
import Switch from "react-switch";
import {Container, Happy, Logo, Zombie} from './styles';
import { ThemeContext } from 'styled-components';

export const MasterHeader = ({toggleTheme}) => {
  const { colors, title } = useContext(ThemeContext);  
  
    return (
        <Container>            
            <Logo />
            <div>                                
                <Switch 
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={30}
                    width={60}                    

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
                          <img src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-space-prettycons-lineal-color-prettycons.png"/>
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
                          <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-sun-weather-justicon-flat-justicon-1.png"/>
                        </div>
                    }                    
                />                
            </div>
        </Container>
    )
};