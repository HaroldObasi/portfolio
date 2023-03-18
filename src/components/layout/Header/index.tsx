import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      py={10}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          boxShadow: "none",
          backdropFilter: "blur(5px)",
        }}
      >
        <Toolbar>
          <Typography component="span" variant="h2">
            🧟
          </Typography>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            🧟
          </IconButton> */}

          <Box></Box>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
