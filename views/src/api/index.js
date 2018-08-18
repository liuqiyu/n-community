import {
  Message,
} from 'element-ui';

import axios from 'axios';
import config from './../common/config';

const instance = axios.create({
  baseURL: config.apiHost,
  params: {
    session_id: config.getSession(),
  },
});

// 添加请求拦截器
instance.interceptors.request.use((request) => {
  // 在发送请求之前做些什么
  const axiosRequest = {
    ...request,
    params: {
      ...request.params,
      session_id: config.getSession(),
    },
  };
  return axiosRequest;
}, error => Promise.reject(error));

// 响应拦截器
instance.interceptors.response.use((response) => {
  if (response.status === 200) {
    if (response.data.tip_code === 99) {
      Message({
        type: 'warning',
        message: '登录过期，请重新登录',
      });
      window.sessionStorage.removeItem('userinfo');
      setTimeout(() => {
        window.history.go(0);
      }, 1000);
    }
  } else {
  }
  return response;
}, error =>
  // 对响应错误做点什么
  Promise.reject(error),
);

export default instance;
