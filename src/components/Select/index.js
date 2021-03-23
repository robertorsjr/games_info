import React, {useEffect, useState} from 'react'
import { Platforms } from '../../components'
import { Options, SelectContainer, SelectArrow, TitleSelect } from './styles'
import { getPlatforms } from '../../services/platforms'

const Select = ({ selectedPlatform, setSelectedPlatform }) => {
  const [show, toggleShow] = useState(false)
  const [isShowing, toggleIsShowing] = useState(false)  
  const [platforms, setPlatforms] = useState({})

  useEffect(()=> {
    async function fetchPlatforms() {
      const response = await getPlatforms()
      setPlatforms(response.data)
    }
    fetchPlatforms()
  },[])
  
  return (
    <SelectContainer onClick={() => toggleShow(!show)}>
      <TitleSelect>{selectedPlatform.name || 'Platforms'}</TitleSelect>
      <SelectArrow/>
      <Options show={show}>
        {platforms.results && platforms.results.map((platform, index) => (
          <Platforms 
            key={index} 
            platform={platform}
            isShowing={isShowing}
            setSelectedPlatform={setSelectedPlatform}
            toggleIsShowing={toggleIsShowing} 
          />
        ))}
      </Options>            
    </SelectContainer>
  )
}

export default Select;