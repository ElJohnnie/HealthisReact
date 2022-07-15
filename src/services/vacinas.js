import api from './api';

const endpoint = process.env.REACT_APP_DEV_ENV ? '/api/vaccine' : '/vacinas';

const erro = {
  erro: 'Erro genérico',
  status: 404,
};

export const getVacinas = async () => {
  try {
    const responseData = await api.get(endpoint);
    console.log(responseData);
    return responseData;
  } catch (error) {
    return erro;
  }
};
