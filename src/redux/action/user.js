import axios from '../../utils/axios';
import {
   GET_DETAIL_USER_PENDING,
   GET_DETAIL_USER_SUCCESS,
   GET_DETAIL_USER_FAILED,
} from '../types';

export const getDetailUser = (id_users) => async (dispatch) => {
   try {
      dispatch({
         type: GET_DETAIL_USER_PENDING,
         payload: null,
      });

      const res = await axios.get(`users/${id_users}`);

      dispatch({
         type: GET_DETAIL_USER_SUCCESS,
         payload: res.data,
      });
   } catch (error) {
      if (error.response) {
         error.message = error.response.data.error;
      }

      dispatch({
         type: GET_DETAIL_USER_FAILED,
         payload: error.message,
      });
   }
};

export const updateProfile = (data, id_users) => {
   return new Promise((resolve, reject) => {
      axios
         .put(`users/update/${id_users}`, data)
         .then((res) => {
            resolve(res.data);
         })
         .catch((err) => {
            reject(err);
         });
   });
};

/* export const updatePhoto = (data, id_users) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`user/photo/${id_users}`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}; */
