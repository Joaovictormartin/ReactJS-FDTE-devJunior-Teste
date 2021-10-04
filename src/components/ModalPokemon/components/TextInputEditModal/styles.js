import styled from "styled-components";

export const TextInput = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: relative;
  top: -100px;

  padding: 0px 22px;

  input {
    width: 200px;
    height: 48px;

    padding: 12px 16px;
    background: var(--neutral);
    
    border: 1px solid var(--neutral-600);
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: var(--modal-Background) 0px 25px 50px -12px;

    font-weight: 600;
    font-style: normal;
    font-size: 15px;
    line-height: 24px;
    text-transform: capitalize;

    color: var(--neutral-1100);
  }

  button {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--neutral-600);
    border-radius: 4px;
    box-shadow: var(--modal-Background) 0px 25px 50px -12px;

    background: var(--neutral);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    img {
      width: 12px;
      height: 12px;
    }
  }
`;
