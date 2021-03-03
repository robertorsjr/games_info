import React from 'react';
import styled from 'styled-components'
import InnerSelect from './InnerSelect';
import arrow from '../images/arrow.png'

const PlatformFont = styled.div`
  font-family:'Noto Sans';
  font-size:15px;
  color:white;  
`
const Platform = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  cursor: ${({hasPlatforms}) => hasPlatforms ? 'initial' : 'pointer'};
`
const SelectArrow = styled.div`
  background-image:url(${arrow});
  width: ${({rotate}) => rotate ? 10 : 14}px;
  height: ${({rotate}) => rotate ? 5 : 6}px;  
  background-position: center;
  background-size: cover;
  z-index:99;
  transform: ${({rotate}) => `rotate(${rotate ? '-90deg' : 0})`};
`

function SubDrop({ platform, isShowing, toggleIsShowing, setSelectedPlatform }) {
    const hasPlatforms = platform.platforms.length > 1

    function onMouseOver() {
        toggleIsShowing(platform)
    }

    return (
        <>
            <Platform 
                hasPlatforms={hasPlatforms} 
                onClick={() => hasPlatforms ? false : setSelectedPlatform(platform.platforms[0])}
                onMouseOver={() => hasPlatforms ? onMouseOver() : false}>         
                <PlatformFont value={platform.id}>{platform.name}</PlatformFont>
                { hasPlatforms && <SelectArrow rotate='true'/> }                                
            </Platform>
            <InnerSelect
                setSelectedPlatform={setSelectedPlatform}
                showInner={platform.id === isShowing.id} 
                onMouseOut={()=> toggleIsShowing(false)}
                platforms={platform.platforms}
            />
        </>
    )
}

export default SubDrop;