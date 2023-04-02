import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "xvmk78gi",
  dataset: "production",
  apiVersion: "2023-04-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

const urlFor = (source: any) => {
  return builder.image(source);
};

export { client, urlFor };
