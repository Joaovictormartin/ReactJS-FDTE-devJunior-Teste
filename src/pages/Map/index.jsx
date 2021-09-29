import React, { useState, useEffect, useCallback } from 'react';
import WOW from "wowjs";

import { SideBar } from '../../components/Sidebar';
import { ModalPokemon } from '../../components/ModalPokemon';

import { Container, Character } from './styles';

export default function Map() {
  const [ error ] = useState(false);
  const [ moving, setMoving ] = useState(false);
  const [ mouseOver, setMouseOver ] = useState(false);
  const [ wowClass, setWowClass ] = useState("");
  const [ openModal, setOpenModal ] = useState(false);
  const [ pokebolas, setPokebolas ] = useState([]);

  useEffect(() =>{
    const wow = new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      live: true,
      mobile: true,
      scrollContainer: null,
    });
    wow.init();
  },[]);

  const handleMouseOverTrue = useCallback(() =>{
    setWowClass(" wow fadeInUp animated");
    setMouseOver(true);
  },[]);
  
  const handleMouseOverFalse = useCallback(() =>{
    setWowClass(" wow fadeOutDown animated");

    setTimeout(() =>{
      setMouseOver(false);
    },300)
  },[]);
  
  const handleCloseModal = useCallback(() =>{
    setOpenModal(false);
    setMoving(false);
    setMouseOver(false);
  },[]);
  
  const handleSubmit = useCallback(async () =>{
    try {
      setMoving(!moving);

      const qtdMax = 807
      const key = Math.floor(Math.random() * (qtdMax - 1 + 1)) + 1;

      //await dispatch(PokemonActions.captureRequest(key));
    
      setTimeout(() =>{
        setOpenModal(true);
        setMoving(false);
        setMouseOver(false);
      },2000)

    } catch(e) {}
  },[]);

  const pokemon = [
    {id: 1, name: 'teste'},
    {id: 2, name: 'teste'},
    {id: 3, name: 'teste'},
  ]

  return (
    <Container>
      <SideBar data={pokebolas}/>
      <Character
        onMouseOver={handleMouseOverTrue}
        onMouseLeave={handleMouseOverFalse}
        onClick={handleSubmit}
        moving={moving}
      >
        {mouseOver && !error && <div className={"search" + wowClass} />}
        {mouseOver && error && <div className={"error" + wowClass} />}
        {moving && <div className={"searching"} />}
      </Character>

      <ModalPokemon
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        pokebolas={pokebolas}
        setPokebolas={setPokebolas}
      />

    </Container>
  );
}