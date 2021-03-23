import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

function BackHome() {
  const history = useHistory()

  const handleClick = () => {
    history.goBack()
  }

  return (  
    <FontAwesomeIcon 
      icon={faArrowLeft} 
      size={'3x'} 
      color={'white'}
      onClick={()=> handleClick()} 
      style={{ cursor: 'pointer' }}
    />
  )
}

export default BackHome;