import styled from "styled-components";
import { Link } from "react-router-dom";

import logoImg from '../../assets/img/pokemonLogo.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    var(--primary-Gradient-500) 0%,
    var(--primary-Gradient-300) 100%
  );
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  width: 270px;
  height: 99px;

  background-image: url(${logoImg});
  background-size: cover;
  background-position: center;

  margin-bottom: 31.81px;
`;

export const ButtonStart = styled(Link)`
  width: 124px;
  height: 56px;
  border-radius: 42px;
  padding: 16px 24px;
  border: none;
  background: var(--action-Default);
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: var(--neutral);
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95)
  }

`;
