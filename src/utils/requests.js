import forEach from 'lodash/forEach'
import axios from 'axios';

axios.defaults.validateStatus = () => true;
axios.defaults.withCredentials = true;
export const buildHeaders = ({headers, defaults}) => {
  headers = headers || {}
  forEach(defaults, (v, k) => headers[k] = headers[k] || v)
  return headers
}

export const getRequest = ({url, data , headers, params, query}) => {
  return axios({
    url,
    withCredentials: true,
    method: 'get',
    data,
    headers,
    params,
    query
  });
}
export const postRequest = ({url, data, params, headers}) => {
  return axios({
    url,
    withCredentials: true,
    method: 'post',
    data,
    params
  });
}
