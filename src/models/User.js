import axios from 'axios'
const { REACT_APP_SERVER_URL } = process.env;

class UserModel {
    static all = () => {
        let request = axios.get(`${REACT_APP_SERVER_URL}/users`)
        return request
    }
}
export default UserModel;