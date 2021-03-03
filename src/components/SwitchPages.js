import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Switch = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#1E2127;
    width:160px;
    height:100px;
    border-radius: 20px;
    cursor: pointer;
    
    

`

function SwitchPages({reverse, onClick}) {
  return (
      <Switch onClick={onClick}>
        <FontAwesomeIcon icon={reverse ? faChevronLeft : faChevronRight} size={'3x'} color={'white'} />
      </Switch>
  );
}

export default SwitchPages;