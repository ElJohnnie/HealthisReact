import axios from 'axios';

const baseUrl = process.env.REACT_APP_DEV_ENV
  ? process.env.REACT_APP_API_HOST
  : 'http://localhost:8080';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
