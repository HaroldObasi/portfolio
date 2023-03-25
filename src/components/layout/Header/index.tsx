import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SideMenu from "./SideMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      py={3}
      mx={{
        sm: 0,
        md: 10,
      }}
    >
      <SideMenu open={open} handleClose={handleClose} />
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
          <IconButton
            onClick={handleOpen}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              display: {
                sm: "block",
                md: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
