import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";

const index = () => {
  return (
    <Box
      height="100%"
      paddingX={{
        xs: 2,
        md: 5,
        lg: 10,
      }}
      marginTop={5}
    >
      <Typography
        color="text.primary"
        fontWeight="600"
        paddingTop={2}
        sx={{
          fontSize: "50px",
        }}
      >
        Contact
      </Typography>
      <Link href="mailto:haroldobasi2k16@gmail.com">
        <Typography
          color="grey.500"
          fontWeight="600"
          marginTop={3}
          sx={{
            "&:hover": {
              color: (theme) => theme.palette.grey[400],
            },
            fontSize: 20,
            transition: "ease-in-out 0.2s",
            textDecoration: "underline",
          }}
        >
          haroldobasi2k16@gmail.com
        </Typography>
      </Link>
      <Typography
        marginTop={1}
        color="grey.500"
        sx={{
          fontSize: 20,
        }}
      >
        Open to job offers, project collaborations, questions, whatever really
        :)
      </Typography>
    </Box>
  );
};

export default index;
