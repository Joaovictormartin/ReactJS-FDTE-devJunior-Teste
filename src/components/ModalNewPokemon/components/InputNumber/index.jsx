import React from "react";

import { Container, TextInput, WrapperInput, Error } from "./styles";

export function InputNumber({
  icon = "",
  label = "",
  placeholder = "",
  unity = "",
  error = "",
  value,
  onChange,
}) {
  return (
    <Container>
      <div className="__wrapperHeader">
        {icon && <img src={icon} />}
        {label && <label>{label}</label>}
      </div>

      <WrapperInput>
        <TextInput
          type="number"
          placeholder={placeholder}
          value={value}
          error={!!error}
          onChange={(e) => onChange(e.target.value)}
        />

        {unity && <p>{unity}</p>}
      </WrapperInput>

      {!!error && <Error numberOfLines={2}>{error}</Error>}
    </Container>
  );
}
