const baseURL = 'https://jsonplaceholder.typicode.com/'

const users = '/users'
const posts = '/posts'
const comments = '/comments'

const urls = {
    users,
    postByUserId: (id) => `${users}/${id}/${posts}`,
    postById: (postId) => `${posts}/${postId}`,
    commentsByPostId: (postId) => `${posts}/${postId}/${comments}`
}

export {
    baseURL,
    urls
}