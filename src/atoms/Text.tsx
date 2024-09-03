import { createElement } from "react";
import { IText } from "../types/text";

const Text = ({ type, content, className, id }: IText) => {
  return createElement(type, { className, id }, content);
};

export default Text;
