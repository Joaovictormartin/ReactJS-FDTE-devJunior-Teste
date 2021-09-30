import React from "react";

import checkIconImg from "../../assets/img/checkIcon.png";
import closeImg from "../../assets/img/close.png";

import { Container, TextInput } from "./styles";

export function TextInputEditModal({ value, onChange, isVisible }) {
  return (
    <Container>
      {isVisible && (
        <TextInput>
          <input value={value} onChange={(e) => onChange(e.target.value)} />
          <button>{<img src={checkIconImg} alt="add" />}</button>
          <button>{<img src={closeImg} alt="add" />}</button>
        </TextInput>
      )}
    </Container>
  );
}
