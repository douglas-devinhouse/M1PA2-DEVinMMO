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
                    height={20}
                    width={50}
                    handleDiameter={30}                    
                />
                <div><img src='../images/zombie.png' alt='Dark mode'/></div>
            </div>
        </Container>
    )
};