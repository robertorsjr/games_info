import React from 'react';
import { MetacriticContainer, MetacriticImg, MetacriticScore} from './styles'

function Metacritic({item}) {
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

export default Metacritic;