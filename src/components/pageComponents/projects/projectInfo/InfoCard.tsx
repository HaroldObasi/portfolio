import React from "react";
import { Typography, Box } from "@mui/material";
import { ProjectItem } from "../types";

interface InfoCardProps {
  name: string;
  shortDescription: string;
  techStack: any[];
}

const InfoCard = ({ name, shortDescription }: InfoCardProps) => {
  return (
    <Box>
      <Typography
        color="text.primary"
        fontWeight="600"
        align="center"
        paddingTop={2}
        sx={{
          fontSize: "50px",
        }}
      >
        {name}
      </Typography>
      <Typography
        color="grey.500"
        fontWeight="600"
        align="center"
        sx={{
          fontSize: "20px",
        }}
      >
        {shortDescription}
      </Typography>
    </Box>
  );
};

export default InfoCard;
