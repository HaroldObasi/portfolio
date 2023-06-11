import React from "react";
import { ProjectItem } from "./types";
import { useTheme, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomChip from "./CustomChip";

const useStyles = makeStyles((theme: Theme) => ({
  chip: {
    backgroundColor: theme.palette.primary.light,
  },
}));

const ProjectCard = ({ projectItem }: { projectItem: ProjectItem }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <CardActionArea href={`projects/${projectItem.slug.current}`}>
      <Box
        px={2}
        py={3}
        sx={{
          backgroundColor: (theme) => theme.palette.primary.dark,
          border: 0.5,
          borderColor: (theme) => theme.palette.primary.light,
          transition: "box-shadow 1s ease-in-out",
          "&:hover": {
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          },
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
          variant="body1"
          color="grey.400"
          component="div"
          fontWeight="200"
        >
          {projectItem.shortDescription}
        </Typography>
        <Box>
          {projectItem.techStack.map((item: string) => {
            return <CustomChip name={item} />;
          })}
        </Box>
      </Box>
    </CardActionArea>
  );
};

export default ProjectCard;
