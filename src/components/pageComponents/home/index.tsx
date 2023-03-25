import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { deepPurple } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";

const MainHome = () => {
  return (
    <Box>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Avatar
          sizes="lg"
          sx={{
            width: "120px",
            height: "120px",
            backgroundColor: (theme) => theme.palette.grey[800],
          }}
        >
          <PersonIcon fontSize="large" />
        </Avatar>
        <Typography
          variant="h3"
          component="div"
          color="text.primary"
          fontWeight="600"
          paddingTop={2}
          // fontSize=""
        >
          Harold Obasi
        </Typography>
      </Stack>
    </Box>
  );
};

export default MainHome;
