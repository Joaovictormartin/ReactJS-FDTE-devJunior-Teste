import React, { useState, useEffect } from "react";
import Select from 'react-select';

import chevron from "../../../../assets/img/chevronDownBlack.png";

import { Container, Error } from "./styles";

export function Picker({ options, error = "" }) {

  const [ types, setTypes ] = useState([])
  const [ disabled, setDisabled ] = useState(false)
 
  useEffect(() => {
    if(types.length >= 2){
      setDisabled(true);
    }
  },[types])

  return (
    <Container>
      <img src={chevron} className="dropdown__icon" alt="Seta para Baixo" />

      <Select
        isMulti
        isDisabled={disabled}
        name="pickerTypes"
        options={options}
        className="basic-multi-select"
        classNamePrefix="Selecione"
        onChange={(e) => setTypes(e)}
        theme={(theme) => ({
          ...theme,
          borderRadius: 3,
          borderColor: "var(--neutral-400)",
        })}
      />
 
      {!!error && <Error numberOfLines={2}>{error}</Error>}
    </Container>
  );
}
