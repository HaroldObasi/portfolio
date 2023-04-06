import React from "react";
import { Grid, Box } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { Projects, ProjectItem } from "./types";

const ProjectMain = ({ projects }: Projects) => (
  <Grid container columnSpacing={1} rowSpacing={{ xs: 0, md: 1 }}>
    {projects.map((item: ProjectItem) => (
      <Grid item xs={12} lg={6}>
        <ProjectCard projectItem={item} />
      </Grid>
    ))}
  </Grid>
);

export default ProjectMain;
