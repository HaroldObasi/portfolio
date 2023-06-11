export interface ProjectItem {
  name: string;
  slug: {
    current: string;
    _type: "slug";
  };
  shortDescription: string;
  thumbnail: any;
  techStack: string[];
  images: any[];
  body: any[];
}

export interface Projects {
  projects: ProjectItem[];
}
