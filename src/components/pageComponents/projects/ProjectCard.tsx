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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* <CardContent sx={{ flex: "1 0 auto" }}> */}
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            // backgroundColor: "grey",
          }}
        >
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {projectItem.techStack.map((item: String) => {
              return (
                <Chip
                  sx={{ marginRight: 2, marginTop: 1 }}
                  size="small"
                  label={item}
                  color="secondary"
                  variant="outlined"
                />
              );
            })}
          </Box>
        </CardContent>
        {/* <Box sx={{ display: "flex", alignItems: "center", marginLeft: 3 }}>
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
        </Box> */}
      </Box>
    </Card>
  );
};

export default ProjectCard;
