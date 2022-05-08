import { clearSessionDetails } from '../../utils/clearSessionDetails';

export function onRequest(config) {
  const customConfig = config;
  const activeToken = JSON.parse(localStorage.getItem('data')) && JSON.parse(localStorage.getItem('data')).user.authentication_token;
  const tempToken = JSON.parse(localStorage.getItem('tempAuthToken'));
  const token = activeToken || tempToken;

  if (token && !customConfig.headers.Authorization) {
    customConfig.headers.Authorization = `token ${token}`;
  }
  return config;
}

export const requestOnFailed = error => Promise.reject(error);

export const responseOnSuccess = response => response;

export const responseOnFailed = (error) => {
  const customError = { ...error };
  if (error.response) {
    const status = error.response.headers.status || error.response.status;
    customError.status = status;
    if (status === 401) {
      clearSessionDetails();
      window.location.pathname = '/';
    }
  }

  return Promise.reject(customError);
};
