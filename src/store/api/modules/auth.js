import HTTP from '@/store/api/http'

export const signIn = (data, responseHandler, errorHandler) => {
    HTTP.post('/auth/login', data)
        .then(responseHandler)
        .catch(errorHandler)
}
