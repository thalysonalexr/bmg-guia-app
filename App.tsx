import React from 'react';
import './src/config/StatusBar';
import './src/config/IgnoreWarnings';

import { AuthProvider } from './src/contexts/auth';

import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
