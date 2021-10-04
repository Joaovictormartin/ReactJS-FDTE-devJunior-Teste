import React from "react";

import { Container, TextInput, Error } from "./styles";

export function Input({
  label = '',
  placeholder,
  type = "text",
  error = "",
  value,
  onChange,
}) {
  return (
    <Container>
      {label && <label>{label}</label>}

      <TextInput
        type={type}
        placeholder={placeholder}
        value={value}
        error={!!error}
        onChange={(e) => onChange(e.target.value)}
      />

      {!!error && <Error numberOfLines={2}>{error}</Error>}
    </Container>
  );
}
