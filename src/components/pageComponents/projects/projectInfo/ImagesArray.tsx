import React from "react";
import Image from "next/image";
import { ImageList, ImageListItem } from "@mui/material";
import { urlFor } from "@/sanity-config";

interface ImagesArrayProps {
  images: any[];
}

const ImagesArray = ({ images }: ImagesArrayProps) => {
  return (
    <ImageList sx={{ height: 450, marginTop: 2 }}>
      {images.map((image) => (
        <ImageListItem>
          <img alt="Image" src={urlFor(image).url()} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImagesArray;
