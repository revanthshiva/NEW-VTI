import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import logo from '../assets/logo.jpeg';

function AppHeader({ open, drawerWidth, onDrawerToggle }) {
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
                <Typography  noWrap component="div">
                    Logout
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default AppHeader;