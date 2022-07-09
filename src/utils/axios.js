import axios from 'axios';

const axiosApi = axios.create({
  baseURL: `${process.env.BACKEND_URL}`
});

axiosApi.interceptors.request.use(
  function (config) {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    if (error.response.status === 403) {
     
      if (error.response.data.message === 'jwt expired') {
        localStorage.clear();
        window.location.href = '/login';
      }
      localStorage.clear();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
)

export default axiosApi;
