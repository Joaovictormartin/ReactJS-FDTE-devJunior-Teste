import React from 'react';

import { Container, Content, Logo, ButtonStart } from './styles';

export default function Home() {
  return (
    <Container>
      <Content>
        <Logo />
        <ButtonStart to="/map">Start</ButtonStart>
      </Content>    
    </Container>
  );
}