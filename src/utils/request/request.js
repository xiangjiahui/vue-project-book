import axios from 'axios';

const defaultRequest = axios.create({
    baseURL: 'http://192.168.2.10:8089/api',
    timeout: 2000
})

export default defaultRequest