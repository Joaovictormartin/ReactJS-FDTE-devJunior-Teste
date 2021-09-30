import React, { useState } from "react";
import Modal from "react-modal";

import { TextInputEditModal } from '../TextInputEditModal';

import { types } from "../../utils/Translation";

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
  ButtonRemovePokemon,
  WrapperTypes,
  Types,
} from "./styles";

export function ModalPokemon({
  data,
  isOpen,
  setPokebolas,
  onRequestClose,
  arryPokemon = [],
  isEdit = false,
}) {
  const [input, setInput] = useState("");

  function handleAddPokemon(data) {
    setPokebolas((oldStatus) => [...oldStatus, data]);
    onRequestClose();
    setInput("");
  }

  function handleRemovePokemon(id) {
    const filterPokemon = arryPokemon.filter((item) => item.id !== id);
    setPokebolas(filterPokemon);
    onRequestClose();
    setInput("");
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
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
          <ImagemAvatar src={data?.sprites?.front_default} />
          {isEdit ? (
            <TextInputEditModal value={input} onChange={setInput} isVisible/>
          ) : (
            <Name>
              <h1>{data?.name}</h1>
            </Name>
          )}

          <WrapperInfo>
            <ConteinerInfoPokemon
              title="hp"
              content={`${data?.stats[0]?.base_stat}/${data?.stats[0]?.base_stat}`}
            />
            <Separator width="1" height="48" />
            <ConteinerInfoPokemon
              title="altura"
              content={`${data?.height * 10} m`}
            />
            <Separator width="1" height="48" />
            <ConteinerInfoPokemon
              title="peso"
              content={`${data?.weight / 10} kg`}
            />
          </WrapperInfo>

          <Separator width="311" height="1" isMargin />

          {isEdit ? (
            <ButtonRemovePokemon onClick={() => handleRemovePokemon(data.id)}>
              Liberar pokemon
            </ButtonRemovePokemon>
          ) : (
            <PokebolaIcon onClick={() => handleAddPokemon(data)} />
          )}

          <WrapperTypes>
            {data?.types.map((item) => (
              <Types key={item?.slot} back={item?.slot}>
                {types(item?.type?.name)}
              </Types>
            ))}
          </WrapperTypes>
        </WraperBottom>
      </Container>
    </Modal>
  );
}
