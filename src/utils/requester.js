import { buildHeaders, postRequest, getRequest, deleteRequest } from './requests';

const BASE_DATA_API_URL = "http://localhost:4000";

const checkResponse = ({resolve, reject}) => {
  return (res) => {
    if (res.status >= 400) {
      reject(res)
    } else {
      resolve(res)
    }
  }
}
export const dataApiPost = ({path, data, params}) => {
  return new Promise((resolve, reject) => {
    postRequest({
      url: ${BASE_DATA_API_URL}${path},
      headers: buildHeaders({
        defaults: {
          "Content-Type": "application/json"
        }
      }),
      credentials: 'include',
      data,
      params
    }).then(checkResponse({resolve, reject}), checkRejectStatus(reject));
  })
}

export const dataApiGet = ({path, data, params}) => {
  return new Promise((resolve, reject) => {
    getRequest({
      url: ${BASE_DATA_API_URL}${path},
      headers: buildHeaders({
        defaults: {
          "Content-Type": "application/json"
        }
      }),
      params,
      data
    }).then(checkResponse({resolve, reject}), checkRejectStatus(reject));
  })
}
