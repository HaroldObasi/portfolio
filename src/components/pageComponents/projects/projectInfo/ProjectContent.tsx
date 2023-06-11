import React from "react";
import { PortableText } from "@portabletext/react";
import { Typography } from "@mui/material";
import { urlFor } from "@/sanity-config";
import Box from "@mui/material/Box";

type Props = {
  content: any[];
  value?: string;
};

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Box textAlign="center">
        <img
          width="90%"
          src={urlFor(value.asset._ref).url()}
          alt="image placeholder"
        />
      </Box>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ol>
        <Typography
          variant="body1"
          color="grey.400"
          component="div"
          fontWeight="200"
          lineHeight={1.5}
          padding={3}
        >
          {children}
        </Typography>
      </ol>
    ),
  },

  block: {
    normal: ({ children }: any) => (
      <Typography
        variant="body1"
        color="grey.400"
        component="div"
        fontWeight="200"
        lineHeight={1.5}
      >
        {children}
      </Typography>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      return (
        <a target="_blank" href={value.href}>
          <Typography
            variant="body1"
            color="grey.400"
            component="div"
            fontWeight="200"
          >
            {children}
          </Typography>
        </a>
      );
    },
  },
};

const ProjectContent = ({ content }: Props) => {
  return (
    <Box marginY={3} width={{ xs: "100%", lg: "800px" }} marginX="auto">
      <PortableText components={myPortableTextComponents} value={content} />;
    </Box>
  );
};

export default ProjectContent;
