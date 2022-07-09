import axios from 'axios';

export const getRecipe = (searchRecipe, getPage, limit) => {
  const search = searchRecipe || '';
  const pageValue = getPage || 1;
  console.log(pageValue, search, limit);
  return {
    type: 'GET_LIST_RECIPE',
    payload: axios({
      url: `${process.env.BACKEND_URL}/recipe?page=${pageValue}&sortType=DESC&sortField=date&limit=${limit}&search=${search}`,
      method: 'GET'
    })
  };
};

export const getDetail = (id) => {
  const token = localStorage.getItem('token');
  return {
    type: 'GET_DETAIL_RECIPE',
    payload: axios({
      url: `${process.env.BACKEND_URL}/recipe/${id}`,
      headers: {
        token
      },
      method: 'GET'
    })
  };
};

export const getMyRecipe = () => {
  const token = localStorage.getItem('token');
  return {
    type: 'GET_MY_RECIPE',
    payload: axios({
      url: `${process.env.BACKEND_URL}/recipe-by-user`,
      headers: {
        token
      }
    })
  };
};

export const insertRecipe = () => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.BACKEND_URL}/recipe/`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createRecipe = (formData, getToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.BACKEND_URL}/recipe/add`, formData, {
        headers: {
          token: getToken,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateRecipe = (formData, getToken, id) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${process.env.BACKEND_URL}/recipe/update/${id}`, formData, {
        headers: {
          token: getToken,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteRecipe = (getIdRecipe, getToken) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.BACKEND_URL}/recipe/delete/${getIdRecipe}`, {
        headers: {
          token: getToken
        }
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};