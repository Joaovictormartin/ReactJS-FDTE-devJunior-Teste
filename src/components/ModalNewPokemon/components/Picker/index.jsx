import React from "react";

import chevron from "../../../../assets/img/chevronDownBlack.png";

import { Container, Select, Error } from "./styles";

export function Picker({ options, error = "" }) {
  return (
    <Container>
      <img src={chevron} className="dropdown__icon" alt="Seta para Baixo" />

      <Select error={!!error} multiple >
        <option value="">Selecione o(s) tipo(s)</option>

        {options &&
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          ))}
      </Select>

      {!!error && <Error numberOfLines={2}>{error}</Error>}

    </Container>
  );
}