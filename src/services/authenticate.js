import api from './api';

const querystring = require('querystring');
const endpoint = process.env.REACT_APP_DEV_ENV ? '/api/token' : '';

export const authToken = async (data) => {
  try {
    const result = await api.post(endpoint, querystring.stringify(data));
    if (result.token) {
      localStorage.setItem('@healthis:token', result.token);
      api.defaults.headers.common.authorization = `Bearer ${result.token}`;
    }
    return result;
  } catch (e) {
    return {
      erro: 'Erro genérico',
      status: 404,
    };
  }
};
