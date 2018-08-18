import api from './index';

const path = {
  // 注册
  register: '/user/register',
  // 登录
  login: '/user/login',
  // 注销
  logout: '/user/logout',
};

const register = (form) => api.post(path.register, form, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = '';
    for(let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    const newRet = ret.slice(0, ret.length - 1);
    return newRet;
  }]
});

const logout = () => api.get(path.logout);

export default {
  register,
  logout,
};
