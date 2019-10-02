import axios from 'axios';

import { IP, axiosHeader } from '../../../config'

export const fetchAll = () => ({
    type : 'FETCH_ALL',
    payload : axios.get(`${IP}/regions`, {headers:axiosHeader})
});

export const create = (regionData) => ({
    type : 'CREATE',
    payload : axios.post(`${IP}/regions`, regionData, {headers:axiosHeader})
});

export const getDetail = (id) => ({
    type : 'GET_DETAIL',
    payload : axios.get(`${IP}/regions/${id}`, {headers:axiosHeader})
});

export const update = (id, regionData) => ({
    type : 'UPDATE',
    payload : axios.patch(`${IP}/regions/${id}`, regionData, {headers:axiosHeader})
});