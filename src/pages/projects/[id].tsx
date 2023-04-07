import React from "react";
import { client } from "@/sanity-config";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { ProjectItem } from "@/components/pageComponents/projects/types";
import Head from "next/head";

const Project = ({ projectInfo }: { projectInfo: ProjectItem }) => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Project: {id}</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  console.log(id);
  const projectInfo = await client.fetch(
    `*[_type == "project" && name == "${id}"]`
  );
  console.log(projectInfo);
  return {
    props: { projectInfo },
  };
}

export default Project;
