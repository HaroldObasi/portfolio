import React from "react";
import { ProjectItem } from "./types";
import Image from "next/image";
import { urlFor } from "@/sanity-config";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

const ProjectCard = ({ projectItem }: { projectItem: ProjectItem }) => {
  const theme = useTheme();
  console.log("project item: ", projectItem);

  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: (theme) => theme.palette.primary.dark,
        border: 0.5,
        borderColor: (theme) => theme.palette.primary.light,
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 100, margin: 3 }}
        image={urlFor(projectItem.thumbnail).width(200).url()}
        alt="Project thumbnail"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", padding: 0, margin: 3 }}>
          <Typography
            component="div"
            variant="h5"
            color="grey.400"
            fontWeight="600"
          >
            {projectItem.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="grey.400"
            component="div"
            fontWeight="200"
          >
            {projectItem.shortDescription}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: 3 }}>
          {projectItem.techStack.map((item: String) => {
            return (
              <Chip
                sx={{ marginRight: 2 }}
                label={item}
                color="secondary"
                variant="outlined"
              />
            );
          })}
        </Box>
      </Box>
    </Card>
  );
};

export default ProjectCard;
