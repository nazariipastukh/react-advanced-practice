const baseURL = 'https://jsonplaceholder.typicode.com'

const todos = '/todos'
const albums = '/albums'
const comments = '/comments'
const posts = '/posts'

const urls = {
    todos: todos,
    albums: albums,
    comments: comments,
    postById: (id) => `${posts}/${id}`
}

export {
    baseURL,
    urls
}