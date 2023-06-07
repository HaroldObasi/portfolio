import React from "react";
import { client } from "@/sanity-config";
import Head from "next/head";
import { Projects } from "@/components/pageComponents/projects/types";
import ProjectMain from "@/components/pageComponents/projects";

const index = ({ projects }: Projects) => {
  return (
    <>
      <Head>
        <title>Harold's Projects</title>
      </Head>
      <ProjectMain projects={projects} />;
    </>
  );
};

export async function getServerSideProps() {
  const projects = await client.fetch(`*[_type == "project"]{
    _id, name, shortDescription, techStack
  }`);

  return {
    props: { projects }, // will be passed to the page component as props
  };
}

export default index;
