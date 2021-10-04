import React from "react";

import checkIconImg from "../../../../assets/img/checkIcon.png";
import closeImg from "../../../../assets/img/close.png";

import { TextInput } from "./styles";

export function TextInputEditModal({
  value = '',
  onChange,
  isVisible,
  onCheck,
  onClose,
}) {
  return (
    <>
      {isVisible && (
        <TextInput>
          <input value={value} onChange={(e) => onChange(e.target.value)} />

          <button onClick={() => onCheck()}>
            {<img src={checkIconImg} alt="check" />}
          </button>
          
          <button onClick={() => onClose()}>
            {<img src={closeImg} alt="close" />}
          </button>
        </TextInput>
      )}
    </>
  );
}
