import React from 'react';

import logoImg from '../../assets/img/pokemonLogo.png';
import { Container, Content, Logo, ButtonStart } from './styles';

export default function Home() {
  return (
    <Container>
      <Content>
        <Logo src={logoImg} />
        <ButtonStart to="/map">Start</ButtonStart>
      </Content>    
    </Container>
  );
}