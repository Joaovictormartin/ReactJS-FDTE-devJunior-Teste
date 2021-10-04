import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import editIconImg from "../../assets/img/editIcon.png";

import { types } from "../../utils/Translation";
import { StatisticsModal } from "./components/StatisticsModal";
import { TextInputEditModal } from "./components/TextInputEditModal";
import { ConteinerInfoPokemon } from "./components/ConteinerInfoPokemon";

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
  SeparatorName,
  PokebolaIcon,
  ButtonRemovePokemon,
  WrapperTypes,
  Types,
  Skills,
} from "./styles";

export function ModalPokemon({
  data,
  isOpen,
  setPokebolas,
  onRequestClose,
  arryPokemon = [],
  isEdit = false,
}) {
  const [namePokemon, setNamePokemon] = useState("");
  const [input, setInput] = useState("");
  const [isInput, setIsInput] = useState(false);

  useEffect(() => {
    setNamePokemon(data?.name);
  }, [data, input]);

  //add o pokemon no array
  function handleAddPokemon(data) {
    setPokebolas((oldStatus) => [...oldStatus, data]);
    onRequestClose();
  }

  //remove o pokemon do array
  function handleRemovePokemon(id) {
    const filterPokemon = arryPokemon.filter((item) => item.id !== id);
    setPokebolas(filterPokemon);
    onRequestClose();
    setInput("");
  }

  //atualizar o name do pokemon
  function handleUpdatePokemon(id) {
    if (!input) return;

    const [updatePokemon] = arryPokemon.filter((item) => item.id === id);

    var indexPokemon = arryPokemon.indexOf(updatePokemon);
    updatePokemon.name = input;

    arryPokemon.splice(indexPokemon, 1, updatePokemon);

    setInput("");
    setIsInput(false);
    setNamePokemon(arryPokemon[indexPokemon].name);
    setPokebolas(arryPokemon);
  }

  //habilita do input do name
  function handleOpenInput() {
    setIsInput(true);
    setInput(namePokemon);
  }

  //oculta do input do name
  function handleCloseInput() {
    setIsInput(false);
    setInput("");
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
      ariaHideApp={false}
      style={{
        content: pokemonModalContent,
        overlay: pokemonModalOverlay,
      }}
    >
      <Container>
        <ButtonCloseModal
          onClick={() => {
            onRequestClose();
            setIsInput(false);
            setInput("");
          }}
        />

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
                  <h1>{namePokemon}</h1>
                  <button onClick={() => handleOpenInput()}>
                    {<img src={editIconImg} alt="edit" />}
                  </button>
                </Name>
              )}
            </>
          ) : (
            <Name>
              <h1>{namePokemon}</h1>
            </Name>
          )}

          <WrapperInfo>
            {data?.stats?.length !== undefined && (
              <ConteinerInfoPokemon
                title="hp"
                value={`${data?.stats[0]?.base_stat}/${data?.stats[0]?.base_stat}`}
              />
            )}
            <Separator width="1" height="48" />
            <ConteinerInfoPokemon
              title="altura"
              value={`${data?.height * 10} m`}
            />
            <Separator width="1" height="48" />
            <ConteinerInfoPokemon
              title="peso"
              value={`${data?.weight / 10} kg`}
            />
          </WrapperInfo>

          <SeparatorName>
            <span />
            <h2>Tipo</h2>
            <span />
          </SeparatorName>

          <WrapperTypes>
            {data?.types !== undefined &&
              data?.types.map((item) => (
                <Types key={item?.slot} back={item?.slot}>
                  {types(item?.type?.name)}
                </Types>
              ))}
          </WrapperTypes>

          <SeparatorName>
            <span />
            <h2>Habilidade</h2>
            <span />
          </SeparatorName>

          {data?.abilities !== undefined && (
            <Skills>
              {`${data?.abilities[0]?.ability?.name}, ${data?.abilities[1]?.ability?.name}`}
            </Skills>
          )}

          {isEdit && (
            <>
              <SeparatorName>
                <span />
                <h2>Estatísticas</h2>
                <span />
              </SeparatorName>

              {data?.stats !== undefined && (
                <StatisticsModal
                  attack={data?.stats[1]?.base_stat}
                  defense={data?.stats[2]?.base_stat}
                  specialAttack={data?.stats[3]?.base_stat}
                  specialDefense={data?.stats[4]?.base_stat}
                  velocity={data?.stats[5]?.base_stat}
                />
              )}
            </>
          )}

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
