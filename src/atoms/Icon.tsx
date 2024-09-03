import { IIcon } from "../types/icon";

const Icon = ({ src, alt, className, id }: IIcon) => {
  return <img src={src} alt={alt} className={className} id={id} />;
};

export default Icon;
