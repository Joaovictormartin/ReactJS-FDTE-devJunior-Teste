import styled from "styled-components";

export const Container = styled.button`
  width: 5.4rem;
  height: 5.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--action-Default);
  border: 1px solid var(--action-Default);
  border-radius: 4.2rem;
  cursor: pointer;

  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.4rem;
  text-align: center;
  color: var(--neutral);
  transition: all 0.2s;

  &:hover {
    background-color: var(--action-Dark);
  }

  &--icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.4rem;
    height: 6.4rem;
    border: 4px solid var(--action-Dark);
  }
`;
