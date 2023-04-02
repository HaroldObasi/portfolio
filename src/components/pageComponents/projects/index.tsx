import React from "react";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { Projects, ProjectItem } from "./types";

const ProjectMain = ({ projects }: Projects) => (
  <div>
    {projects.map((item: ProjectItem) => (
      <ProjectCard projectItem={item} />
    ))}
  </div>
);

export default ProjectMain;
