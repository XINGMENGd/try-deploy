import { fastmockId } from "@/const/fastmockId";
import createErrorLog from "./createErrorLog";
import axios from 'axios';

// 全局的 axios 默认值
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 自定义实例默认值
// const instance = axios.create({
//     baseURL: 'https://api.example.com'
// });

// // Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;


export default axios;

export const cmsAxios = axios.create({
    baseURL: 'https://sspmwx.scms.sztv.com.cn/api/com'
});

export const mockAxios = axios.create({
    baseURL: `https://www.fastmock.site/mock/${fastmockId}`
});

// 添加响应拦截器
cmsAxios.interceptors.response.use(response => response, createErrorLog(['status', 'statusText']));
