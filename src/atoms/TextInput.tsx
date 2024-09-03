import { ITextInput } from "../types/textInput";

const TextInput = ({
  type,
  placeholder,
  className,
  id,
  name,
  value,
  onChange,
  onKeyDown,
}: ITextInput) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      onKeyDown={onKeyDown}
      id={id}
    />
  );
};

export default TextInput;
