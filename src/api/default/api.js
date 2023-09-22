import defaultRequest from '@/utils/request/request.js';

export const getLoginAPI = function (username,password) {
    return defaultRequest.post('/user/login', {
        username,password
    });
}