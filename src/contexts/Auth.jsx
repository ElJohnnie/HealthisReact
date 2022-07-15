import React from 'react';
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [admin, setAdmin] = useState(true);

  // endpoints a fantasia, aguardando os verdadeiros
  useEffect(() => {
    const localStorageToken = localStorage.getItem('@healthis:token');
    if (localStorageToken) {
      api.defaults.headers.common.authorization = `Bearer ${localStorageToken}`;
      api.get('user').then((response) => {
        setUser(response.data);
      });
    }
  }, []);

  useEffect(() => {
    if (token !== null) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get('user').then((response) => {
        setUser(response.data);
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        admin,
        setToken,
        setAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.any,
};
