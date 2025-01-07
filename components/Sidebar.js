import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import CollapsibleListItem from './CollapsibleListItem';

const drawerWidth = 240;

function Sidebar() {
  const financeItems = [
    { text: 'Finance Page 1', href: '/fi-page-1' },
    { text: 'Finance Page 2', href: '/fi-page-2' },
  ];

  const logisticsItems = [
    { text: 'Logistics Page 1', href: '/lo-page-1' },
    { text: 'Logistics Page 2', href: '/lo-page-2' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={Link} href="/">
          <ListItemText primary="Home" />
        </ListItem>
        <CollapsibleListItem primary="Finance" items={financeItems} />
        <CollapsibleListItem primary="Logistics" items={logisticsItems} />
        <ListItem button component={Link} href="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} href="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;