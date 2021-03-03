import api, {endpoints} from './index'

export async function getPlatforms() {
    const { get } = await api
    return get(endpoints.platforms) 
}