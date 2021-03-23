import arrow from '../../assets/images/arrow.png'
import styled from 'styled-components'

export const PlatformFont = styled.div`
  font-family:'Noto Sans';
  font-size:15px;
  color:white;  
`

export const Platform = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  cursor: ${({hasPlatforms}) => hasPlatforms ? 'initial' : 'pointer'};
`

export const SelectArrow = styled.div`
  background-image:url(${arrow});
  width: ${({rotate}) => rotate ? 10 : 14}px;
  height: ${({rotate}) => rotate ? 5 : 6}px;  
  background-position: center;
  background-size: cover;
  z-index:99;
  transform: ${({rotate}) => `rotate(${rotate ? '-90deg' : 0})`};
`
