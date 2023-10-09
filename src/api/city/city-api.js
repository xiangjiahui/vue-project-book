import axios from 'axios';

import { Toast} from 'vant';
// 配置请求拦截器
axios.interceptors.request.use(config => {
    Toast.setDefaultOptions({
        duration: 0
    })
    Toast.loading({
        message: '正在搜索书籍',
        forbidClick: true
    })
    // config.headers.Authorization = 'Bearer city121';
    console.log(config);
    return config;
})
// 配置响应拦截器
axios.interceptors.response.use(response => {
    Toast.clear();
    return response;
})

export const getCityAPI = function () {
    return axios.get('https://api.vvhan.com/api/getIpInfo');
}