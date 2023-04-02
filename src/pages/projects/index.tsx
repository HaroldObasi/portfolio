import React from "react";
import client from "@/sanity-config";

interface ProjectProps {
  projects: any;
}

const index = ({ projects }: ProjectProps) => {
  console.log("projects: ", projects);
  return <div>index</div>;
};

export async function getServerSideProps() {
  const projects = await client.fetch(`*[_type == "project"]`);
  console.log("projects: ", projects);
  return {
    props: { projects }, // will be passed to the page component as props
  };
}

export default index;
