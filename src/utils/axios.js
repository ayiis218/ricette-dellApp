import axios from 'axios';

const axiosInterceptors = axios.create({
   baseURL: `${process.env.REACT_APP_API_URL}`,
});

axiosInterceptors.interceptors.request.use(
   function (config) {
      config.headers = {
         Authorization: `Bearer ${localStorage.getItem('token')}`,
      };
      return config;
   },
   function (error) {
      return Promise.reject(error);
   }
);

axiosInterceptors.interceptors.response.use(
   function (res) {
      return res;
   },
   function (error) {
      if (error.response.status === 403) {
         if (error.response.data.message === 'jwt expired') {
            localStorage.clear();
            window.location.href = '/auth/login';
         }
         localStorage.clear();
         window.location.href = '/auth/login';
      }
      return Promise.reject(error);
   }
);

export default axiosInterceptors;
