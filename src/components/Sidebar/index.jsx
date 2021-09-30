import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import PokemonRedux from "../../redux/ducks/pokemon";
import plusImg from "../../assets/img/plus.png";

import { ModalPokemon } from "../ModalPokemon";
import { Button } from "../Button";
import { Container, Item } from "./styles";

export function SideBar({ data, setPokebolas }) {
  const dispatch = useDispatch();
  const { data: pokemonSelect } = useSelector(({ pokemon }) => pokemon);
 
  const [openModal, setOpenModal] = useState(false);

  async function handleSubmit(id) {
    try {
      if (id !== null) {
        await dispatch(PokemonRedux.captureRequest(id));

        setOpenModal(true);
      }
    } catch (e) {}
  }

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
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
          onClick={() => console.log("botão create")}
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
    </Container>
  );
}
