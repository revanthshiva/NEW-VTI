import { useState, useEffect  } from "react";
import {
  Box,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  TextField, // Import TextField
  Grid,
} from "@mui/material";

import AppHeader from "../components/AppHeader";
import NavDrawer, { drawerWidth } from "../components/NavDrawer";

const Employees = () => {
  const [open, setOpen] = useState(false);
  const [employeeData, setEmployeeData] = useState([]); // Ensure state for employee data is initialized
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const item = { phone: "123-456-7890" }; // Example item data; replace this with actual item data
  const index = 0; // Example index

  let offlineIndicator = `https://clipart-library.com/img1/1561538.png`;

  let onlineIndicator = `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Icon_green_lamp_on.svg/480px-Icon_green_lamp_on.svg.png`;

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setEmployeeData([
      { name: "John Doe", phone: "123-456-7890", email: "john@example.com" },
      { name: "Jane Smith", phone: "987-654-3210", email: "jane@example.com" },
      { name: "Alice Johnson", phone: "555-123-4567", email: "alice@example.com" },
      { name: "Bob Williams", phone: "444-555-6666", email: "bob@example.com" },
      { name: "Charlie Brown", phone: "222-333-4444", email: "charlie@example.com" },
      { name: "Diana Prince", phone: "777-888-9999", email: "diana@example.com" },
      { name: "Ethan Hunt", phone: "111-222-3333", email: "ethan@example.com" },
      { name: "Fiona Gallagher", phone: "666-777-8888", email: "fiona@example.com" },
      { name: "George Martin", phone: "999-000-1111", email: "george@example.com" },
      { name: "Hannah Baker", phone: "333-444-5555", email: "hannah@example.com" },
    ]);
  }, []);
  
  
  return (
    <Box sx={{ width: "100vw", display: "block" }}>
      <Box sx={{ display: "flex" }}>
        <AppHeader
          open={open}
          drawerWidth={drawerWidth}
          onDrawerToggle={handleDrawerToggle}
        />
        <NavDrawer open={open} onDrawerToggle={handleDrawerToggle} />

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h4">Manage Employees</Typography>

            <Box sx={{ textAlign: "right" }}>
              <Typography
                variant="body1"
                sx={{ color: "orange", fontSize: "20px" }}
              >
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "black", fontSize: "25px" }}
              >
                {new Date().toLocaleDateString()}
              </Typography>
            </Box>
          </Box>

<Grid container spacing={2}>
  {employeeData.map((item, index) => (
    <Grid
      item
      xs={12}  // 1 column on mobile
      sm={6}   // 2 columns on tablets
      md={4}   // 3 columns on desktop
      key={item.id || index}
    >
      <Card
        sx={{
          p: 2,
          backgroundColor: "#ececec",
          color: "white",
          borderRadius: "16px",
          height: "100%",
          mx: "auto",  // Center the card horizontally
        }}
      >
        <CardContent>
          {/* Avatar and Name Row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "space-between",
              width: "100%",
              mb: 2,
            }}
          >
            <img
              src="https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg"
              alt="Avatar"
              style={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
            />

            <Typography
              variant="h6"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              {item.name || "John Doe"}
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <img
                src={onlineIndicator}
                alt="Online"
                style={{
                  width: "0.6rem",
                  height: "0.6rem",
                  borderRadius: "50%",
                }}
              />
            </Box>

            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
              <button
                className="btn btn-outline-primary rounded-sm w-32 h-8"
                data-bs-toggle="modal"
                data-bs-target="#more-info-modal"
                onClick={() => setSelectedEmployee(item)}
              >
                <i className="fa-solid fa-circle-info me-1"></i>
                More Info
              </button>
            </Box>
          </Box>

          {/* Phone Input */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              mb: 1,
            }}
          >
            <Typography variant="body1" sx={{ color: "black" }}>
              Phone:
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              value={item.phone}
              onChange={(e) => {
                const updatedEmployees = [...employeeData];
                updatedEmployees[index].phone = e.target.value;
                setEmployeeData(updatedEmployees);
              }}
              sx={{ width: "60%", backgroundColor: "white", mt: 1 }}
            />
          </Box>

          {/* Email Input */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              mb: 1,
            }}
          >
            <Typography variant="body1" sx={{ color: "black" }}>
              Email:
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              value={item.email}
              onChange={(e) => {
                const updatedEmployees = [...employeeData];
                updatedEmployees[index].email = e.target.value;
                setEmployeeData(updatedEmployees);
              }}
              sx={{ width: "60%", backgroundColor: "white", mt: 1 }}
            />
          </Box>

          {/* Current Vehicle */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              mb: 1,
            }}
          >
            <Typography variant="body1" sx={{ color: "black" }}>
              Current Vehicle:
            </Typography>
            <button
              className="btn btn-sm btn-secondary bg-gradient"
              style={{ width: "8rem" }}
              data-bs-toggle="modal"
              data-bs-target="#see-vehicles-modal"
              onClick={() => setSelectedEmployee(item)}
            >
              See Vehicles
            </button>
          </Box>

          {/* Current Process */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              mb: 1,
            }}
          >
            <Typography variant="body1" sx={{ color: "black" }}>
              Current Process:
            </Typography>
            <button
              className="btn btn-sm btn-primary bg-gradient"
              style={{ width: "8rem" }}
              data-bs-toggle="modal"
              data-bs-target="#see-processes-modal"
              onClick={() => setSelectedEmployee(item)}
            >
              See Processes
            </button>
          </Box>

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 2,
              width: "100%",
              mt: 3,
            }}
          >
            <button
              className="btn btn-sm border-2 border-danger text-danger bg-transparent rounded-sm"
              style={{ padding: "0.2rem 1rem" }}
            >
              <i className="fa-solid fa-clock me-1"></i> View Timesheet
            </button>

            <button
              className="btn btn-sm border-2 border-success text-white bg-success rounded-sm"
              onClick={() => handleSaveEmployeeData(item)}
              style={{
                padding: "0.2rem 2rem",
                backgroundColor: "#1F8A59",
                color: "white",
              }}
            >
              Save
            </button>

            <button
              className="btn btn-sm border-2 border-warning text-black bg-warning rounded-sm"
              data-bs-toggle="modal"
              data-bs-target="#change-factory-modal"
              onClick={() => setSelectedEmployee(item)}
              style={{
                padding: "0.2rem 1rem",
                backgroundColor: "#FFC823",
                color: "black",
              }}
            >
              Change Factory
            </button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>


        </Box>
      </Box>
    </Box>
  );
};

export default Employees;
