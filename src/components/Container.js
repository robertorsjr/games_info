import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Search from "./Search";
import Game from './Game'
import { getGames } from '../services/games'
import SwitchPages from './SwitchPages';
import SkeletonLoading from './SkeletonLoading';
import Drop from './Drop'
import GameResume from './GameResume';

const BigBox = styled.div`
    margin: 50px auto;
    width: 1024px;
    background: #1E2127;
    border-radius: 50px;
`
const Title = styled.p`
    font-family: 'Joystix';
    color: #FFFFFF;
    font-size: 32px;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 60px;
`
const LineContainer = styled.div`
    background-color: #ffffff;
    opacity: 0.1;
    width: 1024px;
    height: 0.5px;
`
const SwitchBorder = styled.div`
    display:flex;
    justify-content:space-between;
    width: 1024px;
    align-items: center;
    margin: 20px auto;
`

function Container() {
   const [games, setGames] = useState({})
   const [selectedGame,setSelectedGame] = useState(0)
   const [page, setPage] = useState(1)
   const [loading, setLoading] = useState(false)
   const [searchTerm, setSearchTerm] = useState("");
   const [selectedPlatform, setSelectedPlatform] = useState({})

   const handleChange = event => {
        setSearchTerm(event.target.value)
        setPage(1);
    }
    const scrollToTop= (num)=>{
        setPage(page + num)
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

   if(selectedGame){
       return <GameResume selectedGame={selectedGame} setSelectedGame={setSelectedGame}/>
   }


  return (
    <>
      <BigBox>
          <HeaderContainer>
            <Title>GAMES_INFO</Title>
            <Search value={searchTerm} onChange={handleChange}/>
          </HeaderContainer>
          <Drop selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} />
          <LineContainer/>
          {
              loading ?
              <SkeletonLoading itemSize={10} />                                          
              :
              games.results && games.results.map((game, index) => <Game key={game.id} item={game} setSelectedGame={setSelectedGame} isLast={games.results.length - 1 === index} />)
          }
      </BigBox>
      <SwitchBorder>
         { games.previous ? <SwitchPages onClick={() => scrollToTop(- 1)} reverse={true} /> : <div /> }
         { games.next ? <SwitchPages onClick={() => scrollToTop(1)} reverse={false}/> : <div /> }
      </SwitchBorder>
    </>
  )
}

export default Container;