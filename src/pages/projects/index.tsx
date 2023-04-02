import React from "react";
import { client } from "@/sanity-config";
import {
  ProjectItem,
  Projects,
} from "@/components/pageComponents/projects/types";
import ProjectMain from "@/components/pageComponents/projects";

const index = ({ projects }: Projects) => {
  return <ProjectMain projects={projects} />;
};

export async function getServerSideProps() {
  const projects = await client.fetch(`*[_type == "project"]`);
  return {
    props: { projects }, // will be passed to the page component as props
  };
}

export default index;
