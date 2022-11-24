import axios from 'axios'

const HTTP = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: { 'Content-Type': 'application/json' },
})

HTTP.interceptors.response.use(null, function(error) {
    const { config, response } = error
    if (config !== undefined && config.needAuth) {
        setTimeout(() => {
            console.log('error!')
        }, 2000)
    }
    if (response.status === 500) {
        console.error(response)
    }
    return Promise.reject(error)
})

export default HTTP
