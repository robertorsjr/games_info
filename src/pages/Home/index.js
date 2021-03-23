import React, { useEffect, useState } from 'react';
import { BigBox, HeaderContainer, Title, SwitchBorder, LineContainer } from './styles'
import { Game, Select, Search, HomeSkeleton, SwitchPages } from '../../components'
import { getGames } from '../../services/games'
import { useHistory, useParams } from "react-router-dom";

const Home = () => {
  const [games, setGames] = useState({})
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState({})
  const { page = 1 } = useParams();
  const history = useHistory()

  const handleChange = event => {
    setSearchTerm(event.target.value)
    history.push(`/pages/1`)
  }

  const navigate = (num) => {
    history.push(`/pages/${Number(page) + num}`)
    window.scroll({
      top:0,
      behavior:'smooth'
    })
  }

  useEffect(() => {
      async function fetchGames() {
          setLoading(true)
          const response = await getGames(page, searchTerm, selectedPlatform.id ? `platforms=${selectedPlatform.id}` : undefined)
          setGames(response.data)
          setLoading(false)
      }
      fetchGames()
  },[page, searchTerm, selectedPlatform])

  return (
    <>
      <BigBox>
          <HeaderContainer>
            <Title>GAMES_INFO</Title>
            <Search value={searchTerm} onChange={handleChange}/>
          </HeaderContainer>
          <Select selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} />
          <LineContainer/>
          {
            loading ?
            <HomeSkeleton itemSize={10} />                                          
            :
            games.results && games.results.map((game, index) => <Game key={game.id} item={game} isLast={games.results.length - 1 === index} />)
          }
      </BigBox>
      <SwitchBorder>
         { games.previous ? <SwitchPages onClick={() => navigate(- 1)} reverse={true} /> : <div /> }
         { games.next ? <SwitchPages onClick={() => navigate(1)} reverse={false}/> : <div /> }
      </SwitchBorder>
    </>
  )
}

export default Home;