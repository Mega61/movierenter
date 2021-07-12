import axios from 'axios'

const USER_REST_API_URL = 'http://localhost:8080/api/users'
const ADDUSER_REST_API_URL = 'http://localhost:8080/addUser'

class UserService {

    getUsers(){
        return axios.get(USER_REST_API_URL);
    }

    addUsers(cliente){

        return axios.post(USER_REST_API_URL, cliente);

    }

}

export default new UserService();