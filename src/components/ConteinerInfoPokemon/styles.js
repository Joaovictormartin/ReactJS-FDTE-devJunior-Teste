import styled from "styled-components";

export const Container = styled.div`
  width: 101px;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-between;

  h1 {
    font-weight: 700;
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;

    color: var(--neutral-700);
  }

  p {
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
    line-height: 24px;

    color: var(--neutral-700);
  }
`;
