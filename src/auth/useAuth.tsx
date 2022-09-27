import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthContext');
  }

  return context;
};

export default useAuth;
