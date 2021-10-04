import React, { useState, useCallback } from "react";

import plusImg from "../../assets/img/plus.png";

import { ModalPokemon } from "../ModalPokemon";
import { ModalNewPokemon } from "../ModalNewPokemon";
import { Button } from "../Button";
import { Container, Item } from "./styles";

export function SideBar({ data, setPokebolas }) {
  const [pokemonSelect, setPokemonSelect] = useState([]);
  const [pokemonSelectCustomized, setPokemonSelectCustomized] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openNewModal, setNewOpenModal] = useState(false);

  function handleSubmit(id) {
    try {
      const [PokemonSelecionado] = data.filter((item) => item.id === id);
      const indexPokemon = data.indexOf(PokemonSelecionado);

      if(id >= 1000) {
        setPokemonSelectCustomized(data[indexPokemon]);
        setNewOpenModal(true);
      } else {
        setPokemonSelect(data[indexPokemon]);
        setOpenModal(true);
      }


    } catch (e) {}
  }

  //fechar modal de exibição dos pokemons
  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  //fechar modal de criar os pokemons
  const handleCloseNewModal = useCallback(() => {
    setNewOpenModal(false);
  }, []);

  return (
    <Container>
      {data.length <= 6 &&
        data.map((pokemon) => (
          <Item
            key={pokemon.id}
            onClick={() => handleSubmit(pokemon.id)}
            src={pokemon?.sprites?.front_default}
          />
        ))}

      {data.length < 6 && <Item>?</Item>}

      {data.length < 6 && (
        <Button
          onClick={() => setNewOpenModal(true)}
          icon={<img src={plusImg} alt="add" />}
        />
      )}

      <ModalPokemon
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        setPokebolas={setPokebolas}
        data={pokemonSelect}
        arryPokemon={data}
        isEdit
      />

      <ModalNewPokemon
        isOpen={openNewModal}
        onRequestClose={handleCloseNewModal}
        setPokebolas={setPokebolas}
        arryPokemon={data}
        dataSelect={pokemonSelectCustomized}
      />
    </Container>
  );
}
