import React, {useState, useEffect} from 'react';
import {
  BoxResume, 
  BoxResumeBackImage,
  BoxZ, 
  DateBox, 
  ResumeBox, 
  RedditIcon, 
  Resume, 
  Row,
  DateRelese,
  DivTeste,
  AboutResume,
  AboutText,
  GamePublishers,
  LinkOfficial,
  LinkReddit,
  PlatformIcon,
  PlatformsContainer,
  Playtime,
  StoreWraper,
  Title 
} from './styles'
import { BackButton, Metacritic, Frame, StoreLink, Loading, Modal } from '../../components'
import { getGameById } from '../../services/games';
import dayjs from 'dayjs'
import { mapPlatforms } from '../../utils';
import { useParams } from 'react-router-dom'

function GameInfo() {
  const [game, setGame] = useState({})
  const [showAbout, setShowAbout] = useState(false)
  const [loading, setLoading] = useState(false)
  const params = useParams()

  useEffect(() => {
    async function fetchGames() {
      setLoading(true)
      const response = await getGameById(params.id)
      setGame(response.data)
      setLoading(false)
    }
    fetchGames()
  }, [params.id])

  return (
    <>
      {
        loading ? <Loading/>
        :
        <BoxResume>
        <BoxResumeBackImage image={game.background_image} />
        <BoxZ>
        <BackButton/>
        <Row>
          <Title>{game.name}</Title>
          {game.released && <DateBox>
            <DateRelese>{dayjs(game.released).format('MMM DD, YYYY')}</DateRelese>
          </DateBox>}
        </Row>
        <Row>
          <PlatformsContainer>
            { game.parent_platforms && game.parent_platforms.map((parent) => (
              <PlatformIcon key={parent.platform.id}>
                { mapPlatforms(parent.platform.slug) }
              </PlatformIcon>
            )) }
          </PlatformsContainer>
          <Metacritic item={game}/>
        </Row>
        <Row>
          <PlatformsContainer>
            {game.publishers && game.publishers.length > 0 && (
              <>
                <GamePublishers >
                <AboutText>
                  {'Publishers: '}
                </AboutText>
              </GamePublishers>    
              {game.publishers.map((publisher, index) => (
                <GamePublishers key={publisher.id} >
                  <AboutText>{publisher.name} {game.publishers.length-1 === index ? '' : ', '}</AboutText>  
                </GamePublishers>
              ))} 
              </>
            )}          
          </PlatformsContainer>
          {game.playtime !== 0 && <Playtime>{'Playtime: '}{game.playtime}{' h'}</Playtime>}
        </Row>
        {game.description_raw && <AboutResume>{'About'}</AboutResume>}
        <Row>
          <ResumeBox onClick={()=> setShowAbout(!showAbout)}>
            <Resume>{game.description_raw}</Resume>          
          </ResumeBox>
          <Frame game={game}/>
        </Row>
        <Row>
          <StoreWraper>
            { game.stores && game.stores.map((item, index) => <StoreLink key={index} store={item.store} url={item.url} />) }
          </StoreWraper>
          <DivTeste>
            {game.website && <LinkOfficial onClick={()=>window.open(game.website , "_blank")}>Official Website</LinkOfficial>}
              {game.reddit_name && (
                <Row onClick={()=> window.open(game.reddit_url , "_blank")}>
                  <RedditIcon />
                  <LinkReddit >{game.reddit_name}</LinkReddit>
                </Row>
              )}
          </DivTeste>
        </Row>
        </BoxZ>
        <Modal description={game.description_raw} showModal={showAbout} setShowAbout={setShowAbout}/>
        </BoxResume>
      }
    </>
  );
}

export default GameInfo;