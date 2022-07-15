import api from './api';

const endpoint = process.env.REACT_APP_DEV_ENV ? '/register' : '';

export const postRegister = async (body) => {
  try {
    return await api.post(endpoint, body);
  } catch (e) {
    return {
      erro: 'Erro genérico',
      status: 404,
    };
  }
};
