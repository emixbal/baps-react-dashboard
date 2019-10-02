import axios from 'axios';

import { IP, axiosHeader } from '../../../config'

export const getClusterByRegionId = (regionId) => ({
    type : 'GET_CLUSTERS_BY_REGION',
    payload : axios.get(`${IP}/regions/${regionId}/clusters`, {headers:axiosHeader})
});
