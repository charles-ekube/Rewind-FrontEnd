import axios from "axios";

export default axios.create({
    baseURL : "https://rewind-test.herokuapp.com/",
    // headers: {Authorization : 'Bearer' + localStorage.getItem('token')}
})