import http from './httpService'
import config from '../config'

function movieURL(_id) {
    return `${config.urlAPI}/movies/${_id}`
}

export function getMovies() {
    return http.get(config.urlAPI + "/movies")
}

export function getMovie(_id) {
    return http.get(movieURL(_id))
}

export async function saveMovie(movie) {
    if (movie._id){
        const body = {...movie};
        delete body._id;
        return http.put(movieURL(movie._id), body)
    }
    return http.post(config.urlAPI + "/movies/",movie)
}

export function deleteMovie(_id) {
    return http.delete(movieURL(_id))
}
