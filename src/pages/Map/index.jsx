import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import PokemonRedux from "../../redux/ducks/pokemon";
import { SideBar } from "../../components/Sidebar";
import { ModalPokemon } from "../../components/ModalPokemon";

import { Container, Character } from "./styles";

export default function Map() {
  const dispatch = useDispatch();

  const [error] = useState(false);
  const [moving, setMoving] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [pokebolas, setPokebolas] = useState([]);

  const { data: pokemonData } = useSelector(({ pokemon }) => pokemon);

  const handleMouseOverTrue = useCallback(() => {
    setMouseOver(true);
  }, []);

  const handleMouseOverFalse = useCallback(() => {
    setMouseOver(false);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setMoving(false);
    setMouseOver(false);
  }, []);

  async function handleSubmit() {
    
    if(pokebolas.length === 6) return;
    
    try {
      setMoving(!moving);

      const qtdMax = 807;
      const key = Math.floor(Math.random() * (qtdMax - 1 + 1)) + 1;

      await dispatch(PokemonRedux.captureRequest(key));

      setTimeout(() => {
        setOpenModal(true);
        setMoving(false);
        setMouseOver(false);
      }, 2000);
    } catch (e) {}
  }

  return (
    <Container>
      <SideBar data={pokebolas} setPokebolas={setPokebolas} />
      
      <Character
        onMouseOver={handleMouseOverTrue}
        onMouseLeave={handleMouseOverFalse}
        onClick={handleSubmit}
        moving={moving}
      >
        {mouseOver && !error && <div className={"search"} />}
        {mouseOver && error && <div className={"error"} />}
        {mouseOver && pokebolas.length === 6 && <div className={"error"} />}
        {moving && <div className={"searching"} />}
      </Character>

      <ModalPokemon
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        setPokebolas={setPokebolas}
        data={pokemonData}
      />
    </Container>
  );
}
