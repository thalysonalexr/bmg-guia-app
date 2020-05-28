import React, { useState, useEffect, useContext, createContext } from 'react';

import { User } from '../models/User';
import { authenticate } from '../services/api-core';

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  user: User | null;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      setLoading(true);

      const { user } = await authenticate();
      setUser(user);

      setLoading(false);
    }

    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        loading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
