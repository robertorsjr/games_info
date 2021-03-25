import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Platforms } from '../../components'
import { Options, SelectContainer, SelectArrow, TitleSelect } from './styles'
import { requestPlatforms } from '../../store/ducks/platforms';

const Select = ({ selectedPlatform, setSelectedPlatform }) => {
  const data = useSelector(({platformsState}) => platformsState.data)
  const [show, toggleShow] = useState(false)
  const [isShowing, toggleIsShowing] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestPlatforms())
  }, [dispatch])
  
  return (
    <SelectContainer onClick={() => toggleShow(!show)}>
      <TitleSelect>{selectedPlatform.name || 'Platforms'}</TitleSelect>
      <SelectArrow/>
      <Options show={show}>
        {data.results && data.results.map((platform, index) => (
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