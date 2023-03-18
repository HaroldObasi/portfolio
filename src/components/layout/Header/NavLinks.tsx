import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { navLinks } from "./nav-links";

const NavLinks: React.FC = () => {
  return (
    <Stack direction="row" spacing={5}>
      {navLinks.map((item) => (
        <Link href={item.url}>
          <Typography
            component="h5"
            variant="body1"
            width="100%"
            color="grey.500"
            sx={{
              "&:hover": {
                color: (theme) => theme.palette.grey[400],
              },
            }}
          >
            {item.name}
          </Typography>
        </Link>
      ))}
    </Stack>
  );
};

export default NavLinks;
