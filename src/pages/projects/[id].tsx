import React from "react";
import { client } from "@/sanity-config";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { ProjectItem } from "@/components/pageComponents/projects/types";
import ImagesArray from "@/components/pageComponents/projects/projectInfo/ImagesArray";
// import ProjectContent from "@/components/pageComponents/projects/projectInfo/ProjectContent";
import InfoCard from "@/components/pageComponents/projects/projectInfo/InfoCard";
import Head from "next/head";

const Project = ({ projectInfo }: { projectInfo: ProjectItem }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Harold's projects</title>
      </Head>
      <InfoCard
        name={projectInfo.name}
        shortDescription={projectInfo.shortDescription}
        techStack={projectInfo.techStack}
      />
      {projectInfo.images && <ImagesArray images={projectInfo.images} />}
      {/* {projectInfo.content && <ProjectContent content={projectInfo.content} />} */}
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  const projectInfo = await client.fetch(
    `*[_type == "project" && name == "${id}"]`
  );
  return {
    props: { projectInfo: projectInfo[0] },
  };
}

export default Project;
