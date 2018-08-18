import api from '../index';
import config from '../../global/config';

const path = {
  lists: '/adsdetector/lists',
  ist: '/adsdetector/ist',
  up: '/adsdetector/up',
  upload: 'adsdetector/export',
};

/**
 * 获取列表数据
 * @param page
 * @param count
 * @param form
 * @returns {AxiosPromise<any>}
 */
const getLists = (page, count, form) => api.get(path.lists, {
  params: {
    page,
    count,
    type_id: form.type_id,
    facebook_account_id: form.facebook_account_id,
    fb_id: form.fb_id,
    fb_name: form.fb_name,
    event_id: form.event_id,
    status_id: form.status_id,
    handle_dt: form.handle_dt,
    stat_dt: form.stat_dt,
    priority_level: form.priority_level,
  },
});

const getIst = () => api.get(path.ist);

/**
 * 更新状态
 * @param form
 * @returns {AxiosPromise<any>}
 */
const up = form => api.post(path.up, form, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [(data) => {
    // Do whatever you want to transform the data
    let ret = '';
    const keys = Object.keys(data);
    keys.forEach((key) => {
      ret += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
    });
    const newRet = ret.slice(0, ret.length - 1);
    return newRet;
  }],
});

/**
 * 导出
 * @param form
 * @returns {AxiosPromise<any>}
 */
const exportData = (data) => {
  const sessionId = config.getSession();
  let url = `${config.apiHost}/${path.upload}?`;
  url += `session_id=${sessionId}&type_id=${data.type_id}&
  facebook_account_id=${data.facebook_account_id}&fb_id=${data.fb_id}&fb_name=${data.fb_name}&event_id=${data.event_id}&status_id=${data.status_id}
  &priority_level=${data.priority_level}`;
  if (data.handle_dt && data.handle_dt.length > 0) {
    url += `&handle_dt[]=${data.handle_dt[0]}&handle_dt[]=${data.handle_dt[1]}`;
  }
  if (data.stat_dt && data.stat_dt.length > 0) {
    url += `&stat_dt[]=${data.stat_dt[0]}&stat_dt[]=${data.stat_dt[1]}`;
  }
  return url;
};

export default {
  getLists,
  getIst,
  up,
  exportData,
};
