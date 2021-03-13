import axios from 'axios'
const { REACT_APP_SERVER_URL } = process.env;

class UserModel {
    static all = () => {
        let request = axios.get(`${REACT_APP_SERVER_URL}/users`)
        return request
    }
    static create = (user) => {
        // post request sending the todo object as the second argument
        let request = axios.post(`${REACT_APP_SERVER_URL}/users`, user)
        return request
    }
    static delete = (user) => {
        let request = axios.delete(`${REACT_APP_SERVER_URL}/users, ${user._id}`)
        return request
    }
    // methods to update delete etc.

    static update = (user) => {
        let request = axios.update(`${REACT_APP_SERVER_URL}/users, ${user._id}`)
        return request
    }
}
export default UserModel;