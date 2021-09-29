import React from "react";

import { Container } from "./styles";

export function ConteinerInfoPokemon({title, content}) {
  return (
    <Container>
      <h1>{title && title}</h1>
      <p>{content && content}</p>
    </Container>
  );
}
