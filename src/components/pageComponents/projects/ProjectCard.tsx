import React from "react";
import { ProjectItem } from "./types";
import { urlFor } from "@/sanity-config";
import { useTheme, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  chip: {
    backgroundColor: theme.palette.primary.light,
  },
}));

const ProjectCard = ({ projectItem }: { projectItem: ProjectItem }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <CardActionArea>
      <Box
        px={2}
        py={3}
        sx={{
          backgroundColor: (theme) => theme.palette.primary.dark,
          border: 0.5,
          borderColor: (theme) => theme.palette.primary.light,
          transition: "box-shadow 1s ease-in-out",
          "&:hover": {
            // boxShadow: "0 0 10px 5px rgba(255, 0, 0, 0.3)",
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
          {projectItem.techStack.map((item: String) => {
            return (
              <Chip
                sx={{
                  marginRight: 1,
                  marginTop: 1,
                  "& .MuiChip-label": {
                    color: "white",
                    fontWeight: 200,
                    fontSize: 10,
                  },
                }}
                className={classes.chip}
                size="small"
                label={item}
                color="primary"
                variant="filled"
              />
            );
          })}
        </Box>
      </Box>
    </CardActionArea>
  );
};

export default ProjectCard;
