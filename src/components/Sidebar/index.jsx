import React from 'react';

import plusImg from '../../assets/img/plus.png';

import { Button } from '../Button';
import { Container, Item } from './styles';

export function SideBar({data, onClick}) {
  return(
    <Container>
      {data.length <= 6 &&
        data.map((pokemon) => {
          <Item key={pokemon.id} src={pokemon?.sprites?.front_default} />
        })
      }

      {data.length < 6 && <Item>?</Item>}

      {data.length < 6 && 
        <Button 
          onClick={onClick}
          icon={<img src={plusImg} alt="add" />} 
        />
      }
  
    </Container>
  )
}