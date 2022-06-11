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