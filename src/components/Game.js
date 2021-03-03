import React from 'react';
import styled from "styled-components"
import dayjs from 'dayjs'
import MetaCritic from './MetaCritic'

const HeaderGame = styled.div`
    display: flex;
    align-items: center;
    margin: 30px auto;
    width: 70%;
    cursor: pointer;
`
const ImgGame = styled.div`
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
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 32px;
`
const GameTitle = styled.span`
    font-size: 30px;
    font-family: 'Noto Sans';
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 20px;
`
const GamePlatforms = styled.span`
    font-size: 18px;
    font-family: 'Noto Sans';
    color: #8E9093;
    font-weight: 600;
    margin-bottom: 19px;
`
const GameRelease = styled.span`
    font-size: ${({ size }) => size || 16}px;
    font-family: 'Noto Sans';
    color: #8E9093;
    font-weight: 600;
`
const LineContainer = styled.div`
    background-color: ${({ isLast }) => isLast ? 'transparent' : '#ffffff'};
    opacity: 0.1;
    width: 70%;
    margin: 0 auto;
    height: 0.5px;
`

function Game({ item, isLast, setSelectedGame }) {

    function gameClick() {
       setSelectedGame(item.id)
    }

    return (
        <>
            <HeaderGame onClick={() => gameClick()}>
                <ImgGame image={item.background_image} />
                <InfoContainer>
                    <GameTitle>
                        {item.name}
                    </GameTitle>
                    {item.platforms && <GamePlatforms>
                        {item.platforms.map((platform, index) => {
                            return `${platform.platform.name}${item.platforms.length - 1 === index ? "" : ", "}`
                        })}
                    </GamePlatforms>}
                    {item.released && <GameRelease size={14} >
                        Released date: <GameRelease>{dayjs(item.released).format('MMM DD, YYYY')}</GameRelease>
                    </GameRelease>}
                    <MetaCritic item={item} />
                </InfoContainer>
            </HeaderGame>
            <LineContainer isLast={isLast}/>
        </>
    )
}

export default Game;