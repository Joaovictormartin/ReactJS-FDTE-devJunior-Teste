import styled from "styled-components";

import closeModalImg from "../../assets/img/closeModal.png";

export const pokemonModalOverlay = {
  height: "100vh",
  backgroundColor: "var(--modal-Background)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  zIndex: 5,
};

export const pokemonModalContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",
  padding: "0 !important",
  top: 0,
  width: 370,
  height: 560, //"85vh",
  left: 0,

  border: "none",
  borderRadius: 12,
};

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  background: linear-gradient(
    90deg,
    var(--primary-Gradient-500) 0%,
    var(--primary-Gradient-300) 100%
  );
`;

export const ButtonCloseModal = styled.button`
  width: 38px;
  height: 38px;

  position: absolute;
  top: 1rem;
  right: 1rem;

  background-image: url(${closeModalImg});
  background-size: cover;
  background-position: center;

  border: 0 solid transparent;
  border-radius: 50%;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const WraperBottom = styled.div`
  @media(max-width: 720px) {
    margin-top: 21rem;
  }
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-top: 14rem;

  border-radius: 24px 24px 0px 0px;
  background: var(--neutral-200);
`;

export const ImagemAvatar = styled.button`
  width: 247px;
  height: 247px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  top: -120px;

  border-radius: 50%;
  border: 4px solid var(--primary-Default);
  background-color: var(--neutral-200);

  img {
    width: 85px;
    height: 85px
  }
`;

export const SeparatorName = styled.div`
  width: 90%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin: 30px 0;
  position: relative;
  top: -80px;

  span {
    width: 110px;
    height: 1px;
    background: var(--neutral-500);
  }

  h2 {
    font-weight: 600;
    font-style: normal;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: var(--neutral-700);
  }
`;

export const ButtonCreatePokemon = styled.button`
  width: 221px;
  height: 56px;

  position: relative;
  bottom: 68px;

  border-radius: 42px;
  border: 0;
  background: var(--action-Default);

  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: var(--neutral);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
