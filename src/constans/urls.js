const baseURL = 'https://rickandmortyapi.com/api'

const episodes = '/episode'
const characters = '/character'

const urls = {
    episodes,
    characters: (ids) => `${characters}/${ids}`
}

export {
    baseURL,
    urls
}