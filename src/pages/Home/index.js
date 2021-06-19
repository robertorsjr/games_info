import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BigBox, HeaderContainer, Title, SwitchBorder, LineContainer } from './styles'
import { Game, Select, Search, HomeSkeleton, SwitchPages } from '../../components'
import { requestGames } from '../../store/ducks/games'
import { useHistory, useParams } from "react-router-dom";

const Home = () => {
  const data = useSelector(({ gamesState }) => gamesState.data)
  const loading = useSelector(({ gamesState }) => gamesState.loading)
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState({})
  const { page = 1 } = useParams();
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestGames(page, searchTerm, selectedPlatform.id ? `platforms=${selectedPlatform.id}` : undefined))
  }, [dispatch, page, searchTerm, selectedPlatform.id])

  const handleChange = event => {
    setSearchTerm(event.target.value)
    history.push(`/pages/1`)
  }

  const navigate = (num) => {
    history.push(`/pages/${Number(page) + num}`)
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <BigBox>
        <HeaderContainer>
          <Title>GAMES_INFO</Title>
          <Search value={searchTerm} onChange={handleChange} />
        </HeaderContainer>
        <Select selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} />
        <LineContainer />
        {
          loading ?
            <HomeSkeleton itemSize={10} />
            :
            data.results && data.results.map((game, index) => <Game key={game.id} item={game} isLast={data.results.length - 1 === index} />)
        }
      </BigBox>
      <SwitchBorder>
        {data.previous ? <SwitchPages onClick={() => navigate(- 1)} reverse={true} /> : <div />}
        {data.next ? <SwitchPages onClick={() => navigate(1)} reverse={false} /> : <div />}
      </SwitchBorder>
    </>
  )
}

export default Home;