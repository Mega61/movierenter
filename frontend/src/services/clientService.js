import axios from 'axios'

const USER_REST_API_URL = 'http://localhost:8080/api/users'
const INCUSER_REST_API_URL = 'http://localhost:8080/api/inicioSesion'

class UserService {

    getUsers() {
        return axios.get(USER_REST_API_URL);
    }

    addUsers(cliente) {

        return axios.post(USER_REST_API_URL, cliente);

    }

    findUsers(busqueda) {

        return axios.post(INCUSER_REST_API_URL, busqueda);

    }

}

export default new UserService();