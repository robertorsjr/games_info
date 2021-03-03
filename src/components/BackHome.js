import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function BackHome({setSelectedGame}) {
  return  <FontAwesomeIcon icon={faArrowLeft} size={'3x'} color={'white'} onClick={()=> setSelectedGame(0)} style={{ cursor: 'pointer' }} />
}

export default BackHome;