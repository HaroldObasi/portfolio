import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import CustomChip from "../CustomChip";

interface InfoCardProps {
  name: string;
  shortDescription: string;
  techStack: any[];
}

const InfoCard = ({ name, shortDescription, techStack }: InfoCardProps) => {
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
      <Stack direction="row" justifyContent="center">
        {techStack.map((item: string) => {
          return <CustomChip key={item} name={item} />;
        })}
      </Stack>
    </Box>
  );
};

export default InfoCard;
