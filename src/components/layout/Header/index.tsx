import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      py={3}
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
          <Typography
            component="div"
            variant="h5"
            color="grey.500"
            sx={{ flexGrow: 1, display: { sm: "block" }, fontWeight: 900 }}
          >
            Harold :)
          </Typography>
          <NavLinks />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
