import defaultRequest from '@/utils/request/request.js';
import {Toast} from 'vant';


defaultRequest.interceptors.request.use(config=> {
    // Toast.setDefaultOptions({
    //     duration: 0
    // })
    Toast.loading({
        className: 'loadMessage',
        message: '正在加载数据',
        duration: 1000,
        forbidClick: true
    })
    return config;
},error => {
    this.$toast.clear(false);
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
    return response;
    //return response.data.data ? response.data.data : response.data; 这样简便写法，直接返回后端里的data
},error => {
    const fail = Toast.fail({
        message: '系统错误!',
        duration: 1000
    });
    fail.close();
    // Toast.clear();
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

 export const searchBook = function (name) {
    return defaultRequest.get('/file/search',{
        params: {
            name: name
        }
    });
}