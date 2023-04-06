export interface ProjectItem {
  name: String;
  shortDescription: String;
  thumbnail: any;
  techStack: String[];
  images: any[];
}

export interface Projects {
  projects: ProjectItem[];
}
