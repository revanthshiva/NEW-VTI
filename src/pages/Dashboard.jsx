import { useState, useEffect } from "react";
import { Box, Toolbar, Typography, useTheme, Grid, Card } from "@mui/material";
import AppHeader from "../components/AppHeader";
import NavDrawer, { drawerWidth } from "../components/NavDrawer";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { jwtDecode } from "jwt-decode"; // Corrected import for jwt-decode

function Dashboard() {
  const theme = useTheme();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [username, setUsername] = useState("");

  // Handle token decoding and redirection
  useEffect(() => {
    try {
      const token = sessionStorage.getItem("authToken");
      if (token) {
        const decoded = jwtDecode(token);
        console.log("Decoded token:", decoded); // Check token structure
        const username = decoded.username || decoded.name || "User"; // Get username
        setUsername(username);
        console.log("Username from token:", username); // ✅ PRINTED HERE
      } else {
        console.warn("No token found, redirecting...");
        navigate('/'); // Redirect to homepage if no token found
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      navigate('/'); // Redirect to homepage in case of error while decoding
    }
  }, [navigate]); // Add navigate to dependencies

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <AppHeader
        open={open}
        drawerWidth={drawerWidth}
        onDrawerToggle={handleDrawerToggle}
      />
      <NavDrawer open={open} onDrawerToggle={handleDrawerToggle} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          overflowY: "auto",
        }}
      >
        <Toolbar />

        {/* Welcome and Time */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
<Typography variant="h4">
  Welcome{ " "} 
  <span style={{ color: theme.palette.secondary.main }}>
    {username || "Guest"}!
  </span>
</Typography>

          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="body1"
              sx={{ color: "orange", fontSize: "20px" }}
            >
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "black", fontSize: "25px" }}
            >
              {time.toLocaleDateString()}
            </Typography>
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ mb: 5 }}>
          <Grid container spacing={5} justifyContent="center">
            {/* Register New User */}
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <div
                  className="card w-11/12 bg-secondary mx-auto bg-gradient py-1 text-white text-center rounded-1 cursor-pointer"
                  style={{ padding: "7rem", fontSize: "1.2rem" }}
                >
                  Register New User
                </div>
              </Link>
            </Grid>

            {/* Add New Task */}
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <div
                  className="card w-11/12 bg-secondary mx-auto bg-gradient py-1 text-white text-center rounded-1 cursor-pointer"
                  style={{ padding: "7rem", fontSize: "1.2rem" }}
                  data-bs-toggle="modal"
                  data-bs-target="#add-new-process-modal"
                >
                  Add New Task
                </div>
              </Link>
            </Grid>

            {/* Add New Vehicle */}
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/newvehicle" style={{ textDecoration: "none" }}>
                <div
                  className="card w-11/12 bg-secondary mx-auto bg-gradient py-1 text-white text-center rounded-1 cursor-pointer"
                  style={{ padding: "7rem", fontSize: "1.2rem" }}
                >
                  Add New Vehicle
                </div>
              </Link>
            </Grid>
          </Grid>
        </Box>

        {/* Additional Info Cards */}
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2} justifyContent="center">
            <Box sx={{ mt: 4 }}>
              <Grid container spacing={2} justifyContent="center">
                {/* First Card */}
                <Grid item xs={12} sm={6}>
                  <div
                    className="card w-11/12 mx-auto text-white text-center p-6 cursor-pointer" // increased from p-4 to p-6
                    style={{
                      backgroundColor: "#44A6F1",

                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      fontSize: "1rem",
                      border: "2px solid #44A6F1",
                      borderRadius: "16px",
                      paddingInline: "10rem",
                      paddingBlock: "3rem",
                      cursor: "pointer",
                    }}
                  >
                    {/* Icon Circle */}
                    <div
                      className="w-16 h-16 flex justify-center items-center mx-auto mb-4"
                      style={{
                        border: "4px solid white",
                        padding: "8px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="white"
                        className="w-8 h-8"
                        width="40px"
                        height="40px"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                        />
                      </svg>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: "1.2rem" }}>Vehicle Performance</p>
                  </div>
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Grid container spacing={2} justifyContent="center">
                {/* Second Card */}
                <Grid item xs={12} sm={6}>
                  <div
                    className="card w-11/12 mx-auto text-white text-center p-6" // increased from p-4 to p-6
                    style={{
                      backgroundColor: "#44A6F1",

                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      fontSize: "1rem",
                      border: "2px solid #44A6F1",
                      borderRadius: "16px",
                      paddingInline: "13rem",
                      paddingBlock: "2.1rem",
                      cursor: "pointer",
                    }}
                  >
                    {/* Icon Circle */}
                    <div
                      className="w-16 h-16 flex justify-center items-center mx-auto mb-4"
                      style={{
                        border: "4px solid white",
                        padding: "8px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="white"
                        className="w-8 h-8"
                        width="40px"
                        height="40px"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                        />
                      </svg>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: "1.2rem" }}>
                      Job Info <br /> 320
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2} justifyContent="center">
            {/* Third Card */}
            <Grid item xs={12} sm={6}>
              <div
                className="card w-11/12 mx-auto text-white text-center p-6"
                style={{
                  backgroundColor: "#44A6F1",

                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  fontSize: "1rem",
                  border: "2px solid #44A6F1",
                  borderRadius: "16px",
                  paddingInline: "10.5rem",
                  paddingBlock: "2rem",
                  cursor: "pointer",
                }}
              >
                {/* Icon Circle */}
                <div
                  className="w-16 h-16 flex justify-center items-center mx-auto mb-4"
                  style={{
                    border: "4px solid white",
                    padding: "8px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="white"
                    className="w-8 h-8"
                    width="40px"
                    height="40px"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                  </svg>
                </div>
                <p style={{ fontSize: "1.2rem" }}>
                  Manage Employees <br />
                  320
                </p>
              </div>
            </Grid>

            {/* Fourth Card */}
            <Grid item xs={12} sm={6}>
              <div
                className="card w-11/12 mx-auto text-white text-center p-6"
                style={{
                  backgroundColor: "#44A6F1",

                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  fontSize: "1rem",
                  border: "2px solid #44A6F1",
                  borderRadius: "16px",
                  paddingInline: "11rem",
                  paddingBlock: "2.9rem",
                  cursor: "pointer",
                }}
              >
                {/* Icon Circle */}
                <div
                  className="w-16 h-16 flex justify-center items-center mx-auto mb-4"
                  style={{
                    border: "4px solid white",
                    padding: "8px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    s
                    strokeWidth="2"
                    stroke="white"
                    className="w-8 h-8"
                    width="40px"
                    height="40px"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                    />
                  </svg>
                </div>
                <p style={{ fontSize: "1.2rem" }}>One Drive option</p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
