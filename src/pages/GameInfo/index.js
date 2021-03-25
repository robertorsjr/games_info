import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { requestGameById } from '../../store/ducks/gamesById';
import dayjs from 'dayjs'
import { mapPlatforms } from '../../utils';
import { useParams } from 'react-router-dom'

function GameInfo() {
  const data = useSelector(({gameByIdState}) => gameByIdState.data)
  const loading = useSelector(({gameByIdState}) => gameByIdState.loading)
  const [showAbout, setShowAbout] = useState(false)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestGameById(params.id))
  }, [dispatch, params.id])

  return (
    <>
      {
        loading ? <Loading/>
        :
        <BoxResume>
        <BoxResumeBackImage image={data.background_image} />
        <BoxZ>
        <BackButton/>
        <Row>
          <Title>{data.name}</Title>
          {data.released && <DateBox>
            <DateRelese>{dayjs(data.released).format('MMM DD, YYYY')}</DateRelese>
          </DateBox>}
        </Row>
        <Row>
          <PlatformsContainer>
            { data.parent_platforms && data.parent_platforms.map((parent) => (
              <PlatformIcon key={parent.platform.id}>
                { mapPlatforms(parent.platform.slug) }
              </PlatformIcon>
            )) }
          </PlatformsContainer>
          <Metacritic item={data}/>
        </Row>
        <Row>
          <PlatformsContainer>
            {data.publishers && data.publishers.length > 0 && (
              <>
                <GamePublishers >
                <AboutText>
                  {'Publishers: '}
                </AboutText>
              </GamePublishers>    
              {data.publishers.map((publisher, index) => (
                <GamePublishers key={publisher.id} >
                  <AboutText>{publisher.name} {data.publishers.length-1 === index ? '' : ', '}</AboutText>  
                </GamePublishers>
              ))} 
              </>
            )}          
          </PlatformsContainer>
          {data.playtime !== 0 && <Playtime>{'Playtime: '}{data.playtime}{' h'}</Playtime>}
        </Row>
        {data.description_raw && <AboutResume>{'About'}</AboutResume>}
        <Row>
          <ResumeBox onClick={()=> setShowAbout(!showAbout)}>
            <Resume>{data.description_raw}</Resume>          
          </ResumeBox>
          <Frame game={data}/>
        </Row>
        <Row>
          <StoreWraper>
            { data.stores && data.stores.map((item, index) => <StoreLink key={index} store={item.store} url={item.url} />) }
          </StoreWraper>
          <DivTeste>
            {data.website && <LinkOfficial onClick={()=>window.open(data.website , "_blank")}>Official Website</LinkOfficial>}
              {data.reddit_name && (
                <Row onClick={()=> window.open(data.reddit_url , "_blank")}>
                  <RedditIcon />
                  <LinkReddit >{data.reddit_name}</LinkReddit>
                </Row>
              )}
          </DivTeste>
        </Row>
        </BoxZ>
        <Modal description={data.description_raw} showModal={showAbout} setShowAbout={setShowAbout}/>
        </BoxResume>
      }
    </>
  );
}

export default GameInfo;