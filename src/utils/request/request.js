import axios from 'axios';

const defaultRequest = axios.create({
    baseURL: 'http://192.168.2.10:8089/api'
})

export default defaultRequest