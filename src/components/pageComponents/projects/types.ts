export interface ProjectItem {
  name: string;
  shortDescription: string;
  thumbnail: any;
  techStack: string[];
  images: any[];
  content: any[];
}

export interface Projects {
  projects: ProjectItem[];
}
