import api, {endpoints} from './index'

export async function getGames(page, search, platforms) {
    const { get } = await api
    return get(endpoints.games(page, search, platforms)) 
}

export async function getGameById(id) {
    const { get } = await api
    return get(endpoints.gameById(id)) 
}