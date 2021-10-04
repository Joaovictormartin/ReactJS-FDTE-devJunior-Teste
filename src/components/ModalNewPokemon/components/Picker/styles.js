import styled from "styled-components";

export const Container = styled.div`
  width: 90%;

  position: relative;
  top: -100px;
  margin-bottom: 12px;
`;

export const Select = styled.select`
  width: 100%;
  height: 48px;

  padding: 12px 8px;

  background: var(--neutral);
  border-radius: 3px;
  border: 2px solid
    ${({ error }) => (error ? "var(--action-Default)" : "var(--neutral-400)")};

  font-weight: 600;
  font-style: normal;
  font-size: 15px;
  line-height: 24px;
  text-transform: capitalize;

  color: var(--neutral-1100);

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const Error = styled.span`
  margin-top: 4px;

  font-size: 15px;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: var(--action-Default);
`;
