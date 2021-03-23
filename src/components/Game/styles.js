import styled from "styled-components"

export const Anchor = styled.a`
  text-decoration: none;
`

export const HeaderGame = styled.div`
  display: flex;
  align-items: center;
  margin: 30px auto;
  width: 70%;
  cursor: pointer;
`

export const ImgGame = styled.div`
  background: ${({ image }) => `url(${image})`};
  min-width: 260px;
  min-height: 210px;
  max-width: 260px;
  max-height: 210px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 10px solid black;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 32px;
`

export const GameTitle = styled.span`
  font-size: 30px;
  font-family: 'Noto Sans';
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 20px;
`

export const GamePlatforms = styled.span`
  font-size: 18px;
  font-family: 'Noto Sans';
  color: #8E9093;
  font-weight: 600;
  margin-bottom: 19px;
`

export const GameRelease = styled.span`
  font-size: ${({ size }) => size || 16}px;
  font-family: 'Noto Sans';
  color: #8E9093;
  font-weight: 600;
`

export const LineContainer = styled.div`
  background-color: ${({ isLast }) => isLast ? 'transparent' : '#ffffff'};
  opacity: 0.1;
  width: 70%;
  margin: 0 auto;
  height: 0.5px;
`
