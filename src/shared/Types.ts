export interface ContactInfo {
  urlName: string;
  url: string;
  buttonText: string;
}

export interface AboutElement {
  title: string;
  subtitle?: string;
  type: "simple" | "element" | "hyperlink";
  descriptions: string[];
  urls?: string[];
}

export interface ProjectInfo {
  title: string;
  description: string;
  url: string;
  techStack: string[];
  image?: string;
  playStoreLink?: string;
  appStoreLink?: string;
}

export interface WithObservableRef {
  observableRef: React.RefObject<HTMLElement>;
}
