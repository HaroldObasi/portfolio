import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { navLinks } from "./nav-links";

interface SideMenuProps {
  open: boolean;
  handleClose: () => void;
}

const SideMenu = ({ open, handleClose }: SideMenuProps) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "300px",
          height: "100%",
          backgroundColor: (theme) => theme.palette.primary.light,
          padding: "16px",
          transition: "right 0.3s ease",
        }}
      >
        <Stack direction={"column"}>
          {navLinks.map((item) => (
            <Link href={item.url}>
              <Typography
                component="h5"
                variant="body1"
                width="100%"
                color="grey.500"
                align="center"
                onClick={handleClose}
                m={0}
                p={2}
                sx={{
                  transition: "all 0.2s ease-in-out",
                  borderRadius: 2,
                  "&:hover": {
                    color: (theme) => theme.palette.grey[400],
                    backgroundColor: (theme) => theme.palette.primary.dark,
                  },
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Box>
    </Modal>
  );
};

export default SideMenu;
