import React from 'react';
import dayjs from 'dayjs'
import { Metacritic } from '../../components'
import {
  Anchor,
  GamePlatforms,
  GameRelease,
  GameTitle,
  HeaderGame,
  ImgGame,
  InfoContainer,
  LineContainer
} from './styles'

function Game({ item, isLast }) {

  return (
    <Anchor href={`/gameinfo/${item.id}`}>
      <HeaderGame>
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
            <Metacritic item={item} />
        </InfoContainer>
      </HeaderGame>
      <LineContainer isLast={isLast}/>
    </Anchor>
  )
}

export default Game;