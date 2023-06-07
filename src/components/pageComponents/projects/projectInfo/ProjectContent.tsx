import React from "react";
import { PortableText } from "@portabletext/react";
import { Typography } from "@mui/material";

type Props = {
  content: any[];
  value?: string;
};

const RichTextComponent = {
  types: {
    span: ({ value }: Props) => <h1>{value}</h1>,
  },
};

const ProjectContent = ({ content }: Props) => {
  return <PortableText value={content} />;
};

export default ProjectContent;
