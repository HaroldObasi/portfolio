import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import Typography from "@mui/material/Typography";

const ButtonStack = () => {
  const handleOpenPDF = (): void => {
    window.open(
      "https://harold-portfolio-api-bucket.s3.eu-central-1.amazonaws.com/Harold_O_Resume_v1_.pdf",
      "_blank"
    );
  };
  return (
    <Stack paddingTop={2} direction="row" spacing={5}>
      <Button
        variant="contained"
        color="neutral"
        size="large"
        startIcon={<GitHubIcon />}
        href="https://github.com/HaroldObasi"
        sx={{
          "&:hover": { backgroundColor: "primary.dark" },
        }}
      >
        <Typography
          color="grey.500"
          fontWeight="200"
          textTransform={"capitalize"}
        >
          Github
        </Typography>
      </Button>
      <Button
        variant="contained"
        onClick={handleOpenPDF}
        color="lightBlue"
        size="large"
        startIcon={<StickyNote2Icon color="info" />}
        sx={{
          "&:hover": { backgroundColor: "primary.dark" },
        }}
      >
        <Typography
          color="grey.500"
          fontWeight="200"
          textTransform={"capitalize"}
        >
          Resume
        </Typography>
      </Button>
    </Stack>
  );
};

export default ButtonStack;
