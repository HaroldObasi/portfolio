import React from "react";
import Chip from "@mui/material/Chip";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

interface ChipProps {
  name: string;
  alt?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  chip: {
    backgroundColor: "#1C2C50",
  },
}));

const CustomChip = ({ name, alt }: ChipProps) => {
  const classes = useStyles();
  return (
    <Chip
      sx={{
        marginRight: 1,
        marginTop: 1,
        "& .MuiChip-label": {
          color: "white",
          fontWeight: 200,
          fontSize: 10,
        },
        "& .MuiChip-filled": {
          backgroundColor: "white",
        },
      }}
      className={classes.chip}
      size="small"
      label={name}
      variant="filled"
      // color={alt ? "lightBlue" : "default"}
    />
  );
};

export default CustomChip;
