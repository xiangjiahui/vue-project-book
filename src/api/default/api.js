import defaultRequest from '@/utils/request/request.js';
import {Toast} from 'vant';

defaultRequest.interceptors.request.use(config=> {
    Toast.setDefaultOptions({
        duration: 0
    })
    Toast.loading({
        message: '正在加载数据',
        forbidClick: true
    })
    return config;
})

defaultRequest.interceptors.response.use(response => {
    const code = response.data.code;
    if (code === 200) {
        Toast.success({
            message: '操作成功',
            duration: 1000
        })
    }else {
        Toast.fail({
            message: '操作失败',
            duration: 1000
        })
    }
    //Toast.clear();
    return response;
})

export const getLoginAPI = function (username,password) {
    return defaultRequest.post('/user/login', {
        username,password
    });
}

export const uploadBook = function (files) {
    return defaultRequest.post('/file/upload', files);
}

export const getBooks = function () {
    return defaultRequest.get('/file/getBooks');
}