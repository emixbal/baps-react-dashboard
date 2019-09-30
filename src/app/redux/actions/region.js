import axios from 'axios';

import { IP } from '../../../config'

export const fetchAll = () => ({
    type : 'FETCH_ALL',
    payload : axios.get(IP+'/regions', {headers:
        {
            'Content-Type':'application/json',
            'Authorization':localStorage.getItem('tokenType')+' '+localStorage.getItem('token')
        }
    })
});

export const create = (regionData) => ({
    type : 'CREATE',
    payload : axios.post(IP+'/regions', regionData, {headers:
        {
            'Content-Type':'application/json',
            'Authorization':localStorage.getItem('tokenType')+' '+localStorage.getItem('token')
        }
    })
});

export const getDetail = (id) => ({
    type : 'GET_DETAIL',
    payload : axios.get(IP+'/regions/'+id, {headers:
        {
            'Content-Type':'application/json',
            'Authorization':localStorage.getItem('tokenType')+' '+localStorage.getItem('token')
        }
    })
});