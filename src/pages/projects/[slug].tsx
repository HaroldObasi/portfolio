import React from "react";
import { client } from "@/sanity-config";
import { useRouter } from "next/router";
import { GetServerSidePropsContext, GetStaticProps } from "next";
import { ProjectItem } from "@/components/pageComponents/projects/types";
import ImagesArray from "@/components/pageComponents/projects/projectInfo/ImagesArray";
// import ProjectContent from "@/components/pageComponents/projects/projectInfo/ProjectContent";
import InfoCard from "@/components/pageComponents/projects/projectInfo/InfoCard";
import Head from "next/head";

const Project = ({ projectInfo }: { projectInfo: ProjectItem }) => {
  const router = useRouter();
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

export const getStaticPaths = async () => {
  const query = `*[_type == "project"] {
    _id, 
    slug {
      current
    }
  }`;

  const projects = await client.fetch(query);

  const paths = projects.map((project: ProjectItem) => ({
    params: {
      slug: project.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const { slug } = context.query;

  console.log("params: ", params?.slug);

  const query = `*[_type == "project" && slug.current == $slug][0]{
    _id, 
    name, 
    slug, 
    images,
    body, 
    techStack,
    shortDescription
  }`;

  const projectInfo = await client.fetch(query, {
    slug: params?.slug,
  });

  if (!projectInfo) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projectInfo: projectInfo },
  };
};

export default Project;
