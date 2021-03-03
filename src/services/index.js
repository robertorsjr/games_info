import axios from 'axios'

const api = axios.create({ baseURL: 'https://api.rawg.io/api'})

export const endpoints = {
    games: (page = 1, search = '', platforms) => `/games?page=${page}&search=${search}&${platforms}`,
    platforms: '/platforms/lists/parents',
    gameById: (id) => `/games/${id}`
}

export default api