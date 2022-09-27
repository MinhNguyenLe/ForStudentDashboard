import React, { createContext } from 'react';

export const AuthContext = createContext((): void => {});

const AuthProviderWrapper = () => {
  return <AuthContext.Provider value={() => {}}></AuthContext.Provider>;
};

export default AuthProviderWrapper;
