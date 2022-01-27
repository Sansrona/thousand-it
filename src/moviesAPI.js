import * as axios from "axios";

const APIkey = '6be5b12559a1b236b49a48ba2d894972';

const instance = axios.create({
    withCredentials: false,
    baseURL:'https://api.themoviedb.org/3/'
})

export const moviesAPI = {
    getPopularMovies(){
        return instance.get(`movie/popular?api_key=${APIkey}&language=ru`)
    },
    getTopRatedMovies(pageNumber){
        return instance.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}&language=ru&page=${pageNumber}`)
    },
    getMovie(movieID){
        return instance.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${APIkey}&language=ru`)
    }
}