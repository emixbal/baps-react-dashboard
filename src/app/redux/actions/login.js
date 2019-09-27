import axios from 'axios';

const IP = "https://reqres.in/api/users?page=2";

export const login = (user) => ({
    type : 'LOGIN',
    payload : axios.post(IP, user)
});