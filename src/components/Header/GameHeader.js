import React, { useContext } from 'react';
import {Container} from './styles';

export const GameHeader = ({gameTitle}) => {
  //const { colors, title } = useContext(ThemeContext);    
  return (
      <Container>          
          <h1>{gameTitle}</h1>
      </Container>
  );
};