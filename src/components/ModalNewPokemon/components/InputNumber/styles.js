import styled from "styled-components";

export const Container = styled.div`
  width: 90%;

  position: relative;
  top: -100px;
  margin-bottom: 12px;

  .__wrapperHeader {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      margin: 11px;
    }
  }

  label {
    display: flex;
    align-items: center;
    align-content: center;

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
  border-radius: 3px;
  border: 2px solid
    ${({ error }) => (error ? "var(--action-Default)" : "var(--neutral-400)")};

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

export const WrapperInput = styled.div`
  position: relative;

  p {
    position: absolute;
    right: 30px;
    top: 50%;

    transform: translateY(-50%);
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    color: var(--neutral-700);
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
