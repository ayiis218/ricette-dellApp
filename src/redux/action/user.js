import axios from 'axios';

export const getUser = () => {
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  return {
    type: 'GET_DETAIL_USER',
    payload: axios({
      url: `${process.env.BACKEND_URL}/user/${id}`,
      headers: {
        token
      },
      method: 'GET'
    })
  };
};
