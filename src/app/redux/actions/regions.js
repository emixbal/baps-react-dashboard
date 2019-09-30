import axios from 'axios';

import { IP } from '../../../config'

export const fetchAll = () => ({
    type : 'FETCH_ALL',
    payload : axios.get(IP, {headers:
        {
            'Content-Type':'application/json',
            'Authorization':localStorage.getItem('tokenType')+' '+localStorage.getItem('token')
        }
    })
});