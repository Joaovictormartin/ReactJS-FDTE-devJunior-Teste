import styled, { keyframes } from "styled-components";

import pageBackgroundImg from "../../assets/img/pageBackground.png";
import searchTooltipImg from "../../assets/img/searchTooltip.png";
import searchingTooltipImg from "../../assets/img/searchingTooltip.png";
import tooltipErrorImg from "../../assets/img/tooltipError.png";
import ashFrontImg from "../../assets/img/ashFront.png";
import ashMovingGif from "../../assets/img/ashStop.png.gif";

const fadeIn = keyframes`
  0% { 
    transform: translateY(-25px);
    opacity: 0;
  }
  50% { opacity: 0.5}
  100% { 
    transform: translateY(-65px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${pageBackgroundImg});
  background-size: cover;
  background-position: center;

  .search {
    width: 64px;
    height: 59.71px;
    position: absolute;
    top: -65px;
    //animation: ${fadeIn} 600ms linear;
    
    background-image: url(${searchTooltipImg});
    background-size: cover;
    background-position: center;
  }

  .searching {
    width: 64px;
    height: 59.71px;
    position: absolute;
    top: -65px;

    background-image: url(${searchingTooltipImg});
    background-size: cover;
    background-position: center;
  }

  .error {
    width: 64px;
    height: 59.71px;
    position: absolute;
    top: -65px;

    background-image: url(${tooltipErrorImg});
    background-size: cover;
    background-position: center;
  }
`;

export const Character = styled.div`
  width: 64px;
  height: 64px;
  position: relative;

  background-image: url(${({moving}) => !moving ? ashFrontImg : ashMovingGif });
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({moving}) => !moving ? 'cover' : 'auto'};
`;