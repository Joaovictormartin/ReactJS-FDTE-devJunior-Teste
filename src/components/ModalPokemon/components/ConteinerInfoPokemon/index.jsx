import React from "react";

import { Container } from "./styles";

export function ConteinerInfoPokemon({title, value = ''}) {
  return (
    <Container>
      <h1>{title && title}</h1>
      <p>{value && value}</p>
    </Container>
  );
}
