import HTTP from '@/store/api/http'

export const user = (id, responseHandler, errorHandler) => {
    console.log(id);
    HTTP.get(`/users/${id}`)
    .then(responseHandler)
    .catch(errorHandler)
}


