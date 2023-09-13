import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Button from '@mui/material/Button';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SettingsIcon from '@mui/icons-material/Settings';

import { useNavigate, useLocation } from 'react-router-dom';

import { auth } from '../../config/firebase.config';
import { routes } from '../../routes/routes';

const drawerWidth = 240;

export const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" noWrap style={{ flex: 1 }}>
            Fitness Tracker
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleLogout}
            style={{ width: '100px' }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {[
            {
              title: 'My Progress',
              pathName: routes.dashboard,
              icon: <DashboardIcon />,
            },
            {
              title: 'Workouts',
              pathName: routes.workouts,
              icon: <FitnessCenterIcon />,
            },
            {
              title: 'Training Plan',
              pathName: routes.trainingPlan,
              icon: <EventNoteIcon />,
            },
            {
              title: 'Settings',
              pathName: routes.settings,
              icon: <SettingsIcon />,
            },
          ].map(({ title, icon, pathName }) => (
            <ListItem key={title} disablePadding>
              <ListItemButton
                selected={pathname === pathName}
                onClick={() => navigate(pathName)}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
