import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";

const InfoCard = () => {
  return (
    <>
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
    </>
  );
};

export default InfoCard;
