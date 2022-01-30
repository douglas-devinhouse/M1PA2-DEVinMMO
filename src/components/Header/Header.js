import React from 'react';
//import Switch from "react-switch";
import {Container} from './styles';
//import { ThemeContext } from 'styled-components';
import { useGame } from '../../contexts/game';
import { useNews } from '../../contexts/news';

export const Header = ({toggleTheme, pageTitle}) => {
  //  const { colors, title } = useContext(ThemeContext);  
  const { setTermoBuscaGame } = useGame();      
  const { setTermoBuscaNews } = useNews();  

    return (
        <Container>
            <h1>{pageTitle}</h1>
            <div>
              <input
                onChange={(event) => {
                  //setTermoBuscaGame(event.target.value);
                  //setTermoBuscaNews(event.target.value);

                  pageTitle === 'Games' ?
                  setTermoBuscaGame(event.target.value):
                  setTermoBuscaNews(event.target.value);
                  
                }}                
                type="text"
                placeholder="Pesquisar"
              />
            </div>
           
            {/* <Switch 
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
                
            /> */}
        </Container>
    )
};