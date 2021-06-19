import axios from 'axios'

const api = axios.create({ baseURL: 'https://api.rawg.io/api' })

export const endpoints = {
    games: (page = 1, search = '', platforms) => `/games?page=${page}&search=${search}&${platforms}&key=${process.env.REACT_APP_API_KEY}`,
    platforms: `platforms/lists/parents?key=${process.env.REACT_APP_API_KEY}`,
    gameById: (id) => `/games/${id}?key=${process.env.REACT_APP_API_KEY}`
}

export default api