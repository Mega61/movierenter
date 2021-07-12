import axios from "axios";

const RENT_REST_API_URL = 'http://localhost:8080/api/checkoutRentar'

class rentarService {

    addRenta(renta) {
        console.log(RENT_REST_API_URL + "" + renta);
        return axios.post(RENT_REST_API_URL, renta)
    }


}

export default new rentarService();