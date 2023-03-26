import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import GitHubIcon from "@mui/icons-material/GitHub";

const MainHome = () => {
  return (
    <Box marginBottom={20}>
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
          color="text.primary"
          fontWeight="600"
          paddingTop={2}
          sx={{
            fontSize: "50px",
          }}
        >
          Harold Obasi
        </Typography>
        <Typography
          color="grey.500"
          fontWeight="600"
          sx={{
            fontSize: "20px",
          }}
        >
          AWS Certified, JS/TS, Python, Java
        </Typography>

        <Box paddingTop={2}>
          <Button
            variant="contained"
            color="neutral"
            size="large"
            startIcon={<GitHubIcon />}
            href="https://github.com/HaroldObasi"
          >
            <Typography
              color="grey.500"
              fontWeight="200"
              textTransform={"capitalize"}
            >
              Github
            </Typography>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default MainHome;
