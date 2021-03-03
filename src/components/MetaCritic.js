import React from 'react';
import metacritic from '../images/metacritic.png'
import styled from 'styled-components'

const MetacriticContainer = styled.div`
    display:flex;
    margin-top: 18px;
    align-items: center;

`
const MetacriticImg = styled.div`
    background: url(${metacritic});
    width:30px;
    height:30px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

`
const MetacriticScore = styled.div`
    width: 40px;
    height: 40px;
    border: 2px solid #6DC849;
    box-sizing: border-box;
    border-radius: 10px;
    font-family: 'Noto Sans';
    font-size: 22px;
    color: #6DC849;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
`



// import { Container } from './styles';

function MetaCritic({item}) {
  const hasMetacritc = item.metacritic !== null;
  
  if(hasMetacritc){
    return(
      <MetacriticContainer>
        <MetacriticImg />
        <MetacriticScore>{item.metacritic}</MetacriticScore>
      </MetacriticContainer>
    )
  }
  return null;
}

export default MetaCritic;