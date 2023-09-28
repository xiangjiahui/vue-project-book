import axios from 'axios';

export const getCityAPI = function () {
    return axios.get('https://api.vvhan.com/api/getIpInfo');
}