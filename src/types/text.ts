export interface IText {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  content: string;
  className?: string;
  id?: string;
}
