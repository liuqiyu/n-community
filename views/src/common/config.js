/**
 * config
 * create by lqy 2018/3/26
 */

// let host = 'http://192.168.105.112:8099/';
let host = 'http://47.107.35.126:8091/';
// 舒威
// let host = 'http://192.168.112.215:8086/';
// let host = 'http://192.168.112.212:8091/';
let apiHost = `${location.protocol}//${location.host}/api/`;

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  console.log('开发1');
} else {
  console.log('生产1');
  apiHost = host;
}


const getSession = () => {
  const userinfo = JSON.parse(window.sessionStorage.getItem('userinfo'));
  let session_id;
  userinfo ? session_id = userinfo.session_id : session_id = null;
  return session_id;
};

export default {
  apiHost,
  host,
  getSession,
};
