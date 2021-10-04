import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  position: relative;
  top: -100px;
  margin-bottom: 12px;

  label {
    margin-bottom: 6px;

    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: var(--neutral-700);
  }
`;

export const TextInput = styled.input`
  width: 100%;
  height: 48px;

  padding: 12px 8px;
  background: var(--neutral);

  background: var(--neutral);
  border: 2px solid ${({error}) => error ? 'var(--action-Default)' : 'var(--neutral-400)'};
  border-radius: 3px;

  font-weight: 600;
  font-style: normal;
  font-size: 15px;
  line-height: 24px;
  text-transform: capitalize;

  color: var(--neutral-1100);

  &::placeholder {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;

    opacity: 0.8;
    color: var(--neutral-500);
  }
`;

export const Error = styled.span`
  margin-top: 4px;

  font-size: 15px;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: var(--action-Default);
`;
