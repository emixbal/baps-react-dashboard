import axios from 'axios';

import { IP } from '../../../config'

export const login = (user) => ({
    type : 'LOGIN',
    payload : axios.post(IP+'/login', user)
});