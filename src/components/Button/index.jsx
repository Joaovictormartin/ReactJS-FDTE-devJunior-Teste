import React from "react";

import { Container } from "./styles";

export function Button({ text, icon, onClick }) {
  return (
    <Container 
      className={`btn btn--${text ? "text" : "icon"}`}
      onClick={onClick}  
    >
      {text || icon}
    </Container>
  );
}
