import React from "react";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { Projects, ProjectItem } from "./types";

const ProjectMain = ({ projects }: Projects) => (
  <Grid>
    {projects.map((item: ProjectItem) => (
      <Grid item md={6}>
        <ProjectCard projectItem={item} />
      </Grid>
    ))}
  </Grid>
);

export default ProjectMain;
