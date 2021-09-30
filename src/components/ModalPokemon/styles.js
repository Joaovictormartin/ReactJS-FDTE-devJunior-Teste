import styled from "styled-components";

import closeModalImg from "../../assets/img/closeModal.png";
import pokeballImg from "../../assets/img/pokeball.png";

export const pokemonModalOverlay = {
  height: "100vh",
  backgroundColor: "var(--modal-Background)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  overflow: "hidden",
  zIndex: 5,
};

export const pokemonModalContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",
  padding: 20,
  top: 0,
  height: 560,
  width: 360,
  left: 0,

  border: "none",
  borderRadius: 12,
};

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
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

export const WraperTop = styled.div`
  width: 100%;
  height: 256px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;

  border-radius: 0px;
  background: linear-gradient(
    90deg,
    var(--primary-Gradient-500) 0%,
    var(--primary-Gradient-300) 100%
  );
`;

export const WraperBottom = styled.div`
  width: 100%;
  height: 406px;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  position: absolute;
  top: 153px;
  left: 0;

  border-radius: 24px 24px 0px 0px;
  background: var(--neutral-200);
`;

export const ImagemAvatar = styled.div`
  width: 247px;
  height: 247px;

  position: absolute;
  top: -115px;
  left: 60px;

  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;

  border-radius: 50%;
  border: 4px solid var(--primary-Default);
  background-color: var(--neutral-200);
`;

export const Name = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  margin: 160px 0 36px 0;

  h1 {
    font-size: 18px;
    font-style: normal;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase;
    text-align: center;

    color: var(--neutral-700);
  }
`;


export const WrapperInfo = styled.div`
  width: 311px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Separator = styled.span`
  width: ${({ width }) => width && width}px;
  height: ${({ height }) => height && height}px;
  margin: ${({ isMargin }) => isMargin && "40px 0"};

  background: var(--neutral-500);
`;

export const PokebolaIcon = styled.button`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 40px;
  border-radius: 50%;
  border: 0;

  background: var(--neutral-1100);
  background-size: cover;
  background-position: center;
  background-image: url(${pokeballImg});

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ButtonRemovePokemon = styled.button`
  width: 221px;
  height: 56px;
  position: absolute;
  bottom: 52px;

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

export const WrapperTypes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;
`;

export const Types = styled.div`
  width: 99px;
  height: 32px;

  padding: 8px 16px;
  border-radius: 42px;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;

  text-align: center;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ back }) =>
    back === 1 ? "var(--types-Grass)" : "var(--types-Poison)"};

  color: #ffffff;

  margin: 0 6px;
`;
