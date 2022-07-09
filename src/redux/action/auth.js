import axios from '../../utils/axios';

export const register = (formData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:8120/register`, formData )
      .then((res) => {
        resolve(res, formData);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const login = (formData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:8120/login`, formData)
      .then((res) => {
        resolve(res);
        localStorage.setItem('token', res.data.token.token);
        localStorage.setItem('id', res.data.token.id);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
