import React, { useContext } from "react";
import Switch from "react-switch";
import {Container} from './styles';
import { ThemeContext } from "styled-components";

const Header = ({toggleTheme}) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <h3>Theme Switcher usando "styled-components"</h3>
           
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

                activeBoxShadow
                height={15}
                width={45}                
                handleDiameter={25}
                onHandleColor={colors.secundary}
                offHandleColor={colors.secundary}
                onColor={colors.switchOn}
                offColor={colors.secundary}
                
            />
        </Container>
    )
};

export default Header;