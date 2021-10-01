import React, { useState } from "react";
import Modal from "react-modal";

import editIconImg from "../../assets/img/editIcon.png";

import { types } from "../../utils/Translation";
import { TextInputEditModal } from "../TextInputEditModal";
import { ConteinerInfoPokemon } from "../ConteinerInfoPokemon";

import {
  pokemonModalOverlay,
  pokemonModalContent,
  Container,
  ButtonCloseModal,
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
  const [isInput, setIsInput] = useState(false);

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

  function handleUpdatePokemon(id) {
    if (!input) return;

    const updatePokemon = arryPokemon.map((item) =>
      item.id === id ? { ...item, name: input } : item
    );
    setPokebolas(updatePokemon);
    setInput("");
    setIsInput(false);
  }

  function handleCloseInput() {
    setIsInput(false);
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
        <ButtonCloseModal onClick={onRequestClose} />

        <WraperBottom>
          <ImagemAvatar src={data?.sprites?.front_default} />
          {isEdit ? (
            <>
              {isInput ? (
                <TextInputEditModal
                  value={input}
                  onChange={setInput}
                  isVisible
                  onCheck={() => handleUpdatePokemon(data.id)}
                  onClose={handleCloseInput}
                />
              ) : (
                <Name>
                  <h1>{data?.name}</h1>
                  <button onClick={() => setIsInput(true)}>
                    {<img src={editIconImg} alt="edit" />}
                  </button>
                </Name>
              )}
            </>
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

          <WrapperTypes>
            {data?.types.map((item) => (
              <Types key={item?.slot} back={item?.slot}>
                {types(item?.type?.name)}
              </Types>
            ))}
          </WrapperTypes>

          {isEdit ? (
            <ButtonRemovePokemon onClick={() => handleRemovePokemon(data.id)}>
              Liberar pokemon
            </ButtonRemovePokemon>
          ) : (
            <PokebolaIcon onClick={() => handleAddPokemon(data)} />
          )}
        </WraperBottom>
      </Container>
    </Modal>
  );
}
