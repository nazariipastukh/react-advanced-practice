const baseURL = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'

const urls = {
    cars,
    byId: (id) => `${cars}/${id}`
}

export {
    urls,
    baseURL
}