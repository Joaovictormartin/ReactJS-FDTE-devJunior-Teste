import React, { useCallback } from "react";
import Modal from "react-modal";

import { ConteinerInfoPokemon } from "../ConteinerInfoPokemon";

import {
  pokemonModalOverlay,
  pokemonModalContent,
  Container,
  ButtonCloseModal,
  WraperTop,
  WraperBottom,
  ImagemAvatar,
  Name,
  WrapperInfo,
  Separator,
  PokebolaIcon,
  WrapperTypes,
  Types
} from "./styles";

export function ModalPokemon({
  isOpen,
  onRequestClose,
  data,
  pokebolas,
  setPokebolas,
}) {

  const handlePokemonCapture = useCallback((data) => {
    setPokebolas((oldStatus) => [...oldStatus, data]);
    onRequestClose();
  }, []);

  function types(item) {
    const tipos = {
      water: "água",
      normal: "normal",
      fighting: "luta",
      flying: "voo",
      poison: "veneno",
      ground: "terra",
      rock: "rocha",
      bug: "bicho",
      ghost: "fantasma",
      steel: "aço",
      fire: "fogo",
      grass: "grama",
      electric: "elétrico",
      psychic: "psíquico",
      ice: "gelo",
      dragon: "dragão",
      dark: "sombrio",
      fairy: "mágico",
      unknown: "desconhecido",
      shadow: "sombrio",
    };

    return tipos[item];
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: pokemonModalContent,
        overlay: pokemonModalOverlay,
      }}
    >
      <Container>
        <WraperTop>
          <ButtonCloseModal onClick={onRequestClose} />
        </WraperTop>

        <WraperBottom>
          <ImagemAvatar src={null} />
          <Name>
            <h1>DevFast</h1> {/*<h1>{data?.name}</h1>*/}
          </Name>

          <WrapperInfo>
            <ConteinerInfoPokemon title="hp" content="45/45" />
            <Separator width="1" height="48" />
            <ConteinerInfoPokemon title="altura" content="0.7 m" />
            <Separator width="1" height="48" />
            <ConteinerInfoPokemon title="peso" content="6.9 kg" />
          </WrapperInfo>

          <Separator width="311" height="1" isMargin />

          <PokebolaIcon onClick={() => handlePokemonCapture(data)} />
          <WrapperTypes>
            {data?.types
              .map((item) => (
                <Types back={item?.slot}>{types(item?.type?.name)}</Types>
              ))}
          </WrapperTypes>
        </WraperBottom>
      </Container>
    </Modal>
  );
}
