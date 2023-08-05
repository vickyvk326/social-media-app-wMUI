import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Diversity3, Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box className="nav">
      <AppBar position="fixed" sx={{ top: 0 }}>
        <Toolbar className="styled-toolbar">
          <Diversity3 sx={{ display: { xs: "block", sm: "none" } }} />
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Social media
          </Typography>
          <div className="input-container">
            <InputBase
              className="input"
              placeholder="Search..."
              color="white"
            />
          </div>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Badge className="pointer" badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge className="pointer" badgeContent={4} color="error">
              <Notifications />
            </Badge>
            <Avatar
              className="pointer"
              onClick={() => setOpen(!false)}
              sx={{ height: "30px", width: "30px" }}
              src="https://mui.com/static/images/avatar/1.jpg"
            />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Avatar
              sx={{ height: "30px", width: "30px" }}
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Typography onClick={() => setOpen(!false)} variant="span">
              John
            </Typography>
          </Box>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={() => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
