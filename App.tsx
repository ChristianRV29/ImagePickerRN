import React from 'react';

import { PermissionsProvider } from './src/context/PermissionsContext';
import { Home } from './src/screens/Home';

export const App = () => {
  return (
    <PermissionsProvider>
      <Home />
    </PermissionsProvider>
  );
};
