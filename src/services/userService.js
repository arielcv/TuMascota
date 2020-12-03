import http from './httpService'
import config from '../config'

const apiEndpoint = config.urlAPI + "/users";

export function register(user){
    return http.post(apiEndpoint,{
        email: user.username,
        password: user.password,
        name: user.name
    })
}
