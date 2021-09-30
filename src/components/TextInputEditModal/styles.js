import styled from "styled-components";

export const Container = styled.div``;

export const TextInput = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0px 22px;
  margin: 150px 0px 24px 0px;
  box-shadow: var(--modal-Background) 0px 25px 50px -12px;

  input {
    width: 200px;
    height: 48px;

    padding: 12px 16px;
    background: var(--neutral);

    border: 1px solid var(--neutral-600);
    box-sizing: border-box;
    border-radius: 4px;

    font-weight: 600;
    font-style: normal;
    font-size: 15px;
    line-height: 24px;

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
