import React, { useContext } from 'react';
import Switch from "react-switch";
import {Container} from './styles';
import { ThemeContext } from 'styled-components';

export const MasterHeader = ({toggleTheme}) => {
  const { colors, title } = useContext(ThemeContext);     
  
    return (
        <Container>
            <h1>GAMEFLIX</h1>
            <div>
                <Switch 
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    checkedHandleIcon={
                        <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 20
                        }}
                        >
                        ☪️                      
                        </div>
                    }
                    uncheckedHandleIcon={
                        <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 20
                        }}
                        >
                        ☀️
                        </div>
                    }
                    
                    height={15}
                    width={45}                
                    handleDiameter={25}
                    onHandleColor={colors.secundary}
                    offHandleColor={colors.secundary}
                    onColor={colors.switchOn}
                    offColor={colors.secundary}
                    
                />
            </div>
        </Container>
    )
};