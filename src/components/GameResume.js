import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { getGameById } from '../services/games';
import BackHome from './BackHome';
import dayjs from 'dayjs'
import { mapPlatforms } from '../utils';
import MetaCritic from './MetaCritic';
import BoxVideo from './BoxVideo'
import LinkStore from './LinkStore'
import reddit from '../images/reddit.png'
import ModalGame from './ModalGame';
import LoaderS from './LoaderS';

const BoxResume = styled.div`
  margin: 50px auto;
  padding: 52px 48px;
  width: 1024px;
  min-height: 800px;
  border-radius: 50px;
`
const BoxZ = styled.div`
  
  z-index:5;
`
const BoxResumeBackImage = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.15;
  margin: 50px auto;
  padding: 52px 48px;
  width: 1024px;
  min-height: 800px;
  border-radius: 50px;
  background: ${({ image }) => `url(${image})`} no-repeat center;
  background-size: cover;
  z-index:-5;
`;

const Row = styled.div`
  display:flex;
  margin: 19px 0px;
  justify-content:space-between;
  align-items:center;

`
const Title = styled.span`
  font-family:'Noto Sans';
  font-size:36px;
  color:white;
`
const DateBox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 126px;
  height: 24px;
  background: #333333;
  border-radius: 5px;
`
const DateRelese = styled.span`
  font-family:'Noto Sans';
  font-size:16px;
  color:white;
  font-weight:300;
  line-height:21.79px;
`

const PlatformsContainer = styled.div`
  display: flex;
  align-items: center;
`

const PlatformIcon = styled.div`
  margin-right: 20px;
`

const AboutText = styled.span`
  font-family:'Noto Sans';
  font-size:18px;
  color:white;
`
const GamePublishers= styled.div`
  margin-right: 5px;
`
const Playtime = styled.div`
  font-family: 'Noto Sans';
  width: 110px;
  height: 22px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
`
const AboutResume = styled.span`
  
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #FFFFFF;
`
const Resume = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
`
const ResumeBox = styled.div`
  display: block;
  width: 456px;
  height: 198px;
  cursor: pointer;
  overflow-y:hidden;
`
const StoreWraper = styled.div`
  width: 456px;
  height: 280px;
  display:flex;
  flex-direction:column;
  flex-wrap: wrap;
  margin-top: 30px;
`
const DivTeste = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  align-self: flex-end;
`
const LinkOfficial = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: white;
  cursor: pointer;
  margin-bottom:5px;
  display:flex;
  justify-content:center;
  align-items:center;
`

const RedditIcon = styled.span`
  background-image:url(${reddit});
  width: 20px;
  height: 20px;
  color:white;
  background-position: center;
  background-size: cover;
  cursor:pointer;
`

const LinkReddit = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: white;
  cursor:pointer;
  margin-left:8px;
`


function GameResume({selectedGame, setSelectedGame }) {
  const [game, setGame] = useState({})
  const [showAbout, setShowAbout] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchGames() {
        setLoading(true)
        const response = await getGameById(selectedGame)
        setGame(response.data)
        setLoading(false)
    }
    fetchGames()
  }, [selectedGame])


  return (
    <>
      {
        loading ? <LoaderS/>
        :
        <BoxResume>
        <BoxResumeBackImage image={game.background_image} />
        <BoxZ>
        <BackHome setSelectedGame={setSelectedGame} />
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
          <MetaCritic item={game}/>
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
          <BoxVideo game={game}/>
        </Row>
        <Row>
          <StoreWraper>
            { game.stores && game.stores.map((item, index) => <LinkStore key={index} store={item.store} url={item.url} />) }
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
        <ModalGame description={game.description_raw} showModal={showAbout} setShowAbout={setShowAbout}/>
        </BoxResume>
      }
    </>
  );
}

export default GameResume;