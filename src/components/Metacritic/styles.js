import metacritic from '../../assets/images/metacritic.png'
import styled from 'styled-components'

export const MetacriticContainer = styled.div`
  display:flex;
  margin-top: 18px;
  align-items: center;
`

export const MetacriticImg = styled.div`
  background: url(${metacritic});
  width:30px;
  height:30px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const MetacriticScore = styled.div`
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
