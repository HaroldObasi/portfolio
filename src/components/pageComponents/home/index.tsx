import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import GitHubIcon from "@mui/icons-material/GitHub";
import ButtonStack from "./ButtonStack";
import InfoCard from "./InfoCard";

const MainHome = () => {
  return (
    <Box
      marginBottom={20}
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingTop={15}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <InfoCard />
        <ButtonStack />
      </Stack>
    </Box>
  );
};

export default MainHome;
