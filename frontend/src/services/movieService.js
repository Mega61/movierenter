import axios from "axios";

const MOVIE_REST_API_URL = 'http://localhost:8080/api/peliculas'

const MOVIE_TOP4_API_URL = 'http://localhost:8080/api/peliculasparciales'

class MovieService{

    getMovies(){
        return axios.get(MOVIE_REST_API_URL);
    }

    getFourMovies(){
        return axios.get(MOVIE_TOP4_API_URL);
    }

}

export default new MovieService();