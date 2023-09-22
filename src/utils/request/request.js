import axios from 'axios';

const defaultRequest = axios.create({
    baseURL: 'https://localhost:8089/api'
})

export default defaultRequest