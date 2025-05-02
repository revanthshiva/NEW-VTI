import { useState } from 'react';
import {
    Box,
    Toolbar,
    Typography,
    Card,
    CardContent,
    useTheme,
    Container,
} from '@mui/material';
import {
    Work as WorkIcon,
} from '@mui/icons-material';
import AppHeader from '../components/AppHeader';
import NavDrawer, { drawerWidth } from '../components/NavDrawer';

function Dashboard() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <AppHeader
                open={open}
                drawerWidth={drawerWidth}
                onDrawerToggle={handleDrawerToggle}
            />

            <NavDrawer open={open} onDrawerToggle={handleDrawerToggle} />

            {/* Main Container */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    ml: open ? `${drawerWidth}px` : 0,
                    display: 'flex',
                    justifyContent: 'center', // Center horizontally
                    alignItems: 'center', // Center vertically
                    height: '100vh', // Full viewport height
                }}
            >
                <Toolbar />
                {/* Centered Card */}
                <Card
                    sx={{
                        width: 300,
                        height: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 3,
                    }}
                >
                    <CardContent sx={{ textAlign: 'center' }}>
                        <WorkIcon fontSize="large" />
                        <Typography variant="h6" mt={1}>
                            Projects
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}

export default Dashboard;
