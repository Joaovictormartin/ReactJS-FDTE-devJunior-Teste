import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 2rem;
  left: 2rem;
`;

export const Item = styled.button`
  width: 5.4rem;
  height: 5.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0.4rem solid var(--primary-Dark);
  border-radius: 12.8rem;
  margin-bottom: 20px;

  color: var(--primary-Dark);
  font-size: 4rem;
  font-weight: bold;

  background: ${({src}) => src ? "var(--neutral)" : "var(--primary-Default)" };
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
