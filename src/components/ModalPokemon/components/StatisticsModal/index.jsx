import React from "react";

import shieldImg from "../../../../assets/img/shield.png"; //escudo
import swordImg from "../../../../assets/img/sword.png"; //espada
import speedImg from "../../../../assets/img/speed.png"; //velocidade

import { Container, Icon, Title, Value } from "./styles";

export function StatisticsModal({
  defense,
  attack,
  specialDefense,
  specialAttack,
  velocity,
}) {
  return (
    <>
      <Container>
        <Icon><img src={shieldImg} alt="defense" /></Icon>
        <Title>Defesa</Title>
        <Value>{defense && defense}</Value>
      </Container>

      <Container>
        <Icon><img src={swordImg} alt="attack" /></Icon>
        <Title>Ataque</Title>
        <Value>{attack && attack}</Value>
      </Container>
      
      <Container>
        <Icon><img src={shieldImg} alt="specialDefense" /></Icon>
        <Title>Defesa Especial</Title>
        <Value>{specialDefense && specialDefense}</Value>
      </Container>
      
      <Container>
        <Icon><img src={swordImg} alt="specialAttack" /></Icon>
        <Title>Ataque Especial</Title>
        <Value>{specialAttack && specialAttack}</Value>
      </Container>
      
      <Container>
        <Icon><img src={speedImg} alt="velocity" /></Icon>
        <Title>Velocidade</Title>
        <Value>{velocity && velocity}</Value>
      </Container>
      
    </>
  );
}
