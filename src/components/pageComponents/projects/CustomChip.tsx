import React from "react";
import Chip from "@mui/material/Chip";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

interface ChipProps {
  name: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  chip: {
    backgroundColor: theme.palette.primary.light,
  },
}));

const CustomChip = ({ name }: ChipProps) => {
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
      }}
      className={classes.chip}
      size="small"
      label={name}
      color="primary"
      variant="filled"
    />
  );
};

export default CustomChip;
