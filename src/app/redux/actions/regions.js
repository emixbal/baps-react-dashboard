import axios from 'axios';

const IP = "https://reqres.in/api/users?page=2";

export const fetchAll = () => ({
    type : 'FETCH_ALL',
    payload : axios.get(IP)
});