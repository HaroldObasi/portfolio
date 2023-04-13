import React from "react";
import { urlFor } from "@/sanity-config";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

interface ImagesArrayProps {
  images: any[];
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ImagesArray = ({ images }: ImagesArrayProps) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 3 }}>
      <Paper
        square
        elevation={0}
        sx={{
          pl: 2,
          bgcolor: "primary.dark",
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            key={step}
          >
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: "block",
                  height: "75%",
                  maxHeight: "400px",
                  overflow: "hidden",
                }}
                src={urlFor(step).url()}
                alt={step.label}
              />
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default ImagesArray;
