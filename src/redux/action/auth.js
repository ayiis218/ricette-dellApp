import axios from '../../utils/axios';

export const register = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:8120/register`, data )
      .then((res) => {
        resolve(res, data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:8120/login`, {
        email: email,
        password: password,
      })
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
