import axios from "axios";

const MOVIE_REST_API_URL = 'http://localhost:8080/api/peliculas'

class MovieService{

    getMovies(){
        return axios.get(MOVIE_REST_API_URL);
    }

}

export default new MovieService();