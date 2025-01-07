// filepath: /c:/Users/nikola.radic/Desktop/js/copilot-4/my-next-app/components/Layout.js
import * as React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginLeft: '240px', marginTop: '64px' }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default Layout;