import axios from "axios";

export default axios.create({
    baseURL : "https://rewind-api.herokuapp.com/",
    // headers: {Authorization : 'Bearer' + localStorage.getItem('token')}
})