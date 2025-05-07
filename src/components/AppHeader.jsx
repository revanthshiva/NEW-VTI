import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
  } from '@mui/material';
  import { Menu as MenuIcon } from '@mui/icons-material';
  import logo from '../assets/logo.jpeg';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  
  function AppHeader({ open, drawerWidth, onDrawerToggle }) {
    const [openLogoutModal, setOpenLogoutModal] = useState(false); // State for controlling modal visibility
    const navigate = useNavigate();
  
    // Function to handle logout
    const handleLogout = () => {
      // Delete sessionStorage and redirect to login page
      sessionStorage.removeItem('authToken');
      navigate('/'); // Redirect to login page
    };
  
    return (
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${open ? drawerWidth : 0}px)` },
          ml: { sm: `${open ? drawerWidth : 0}px` },
          transition: (theme) =>
            theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            <Typography variant="h6" noWrap component="div">
              Time Booking System
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            component="div"
            sx={{ cursor: 'pointer' }}
            onClick={() => setOpenLogoutModal(true)} // Open logout modal on click
          >
            Logout
          </Typography>
        </Toolbar>
  
        {/* Logout Confirmation Modal */}
        <Dialog
          open={openLogoutModal}
          onClose={() => setOpenLogoutModal(false)} // Close modal
        >
          <DialogTitle>Logout</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to logout?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenLogoutModal(false)} color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleLogout} // Call handleLogout function
              color="primary"
            >
              Logout
            </Button>
          </DialogActions>
        </Dialog>
      </AppBar>
    );
  }
  
  export default AppHeader;
  