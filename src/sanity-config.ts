import { createClient } from "next-sanity";

const client = createClient({
  projectId: "xvmk78gi",
  dataset: "production",
  apiVersion: "2023-04-01",
  useCdn: false,
});

export default client;
