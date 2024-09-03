import Icon from "../atoms/Icon";
import Text from "../atoms/Text";
import TextInput from "../atoms/TextInput";
import { ITextInput } from "../types/textInput";

const SearchBox = ({
  onChange,
  name,
  value,
  type,
  onKeyDown,
  error,
}: ITextInput) => {
  return (
    <div className="search">
      <TextInput
        type={type}
        name={name}
        value={value}
        placeholder="Search Location..."
        className="search__input"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {error && <Text type="p" content={error} className="search__error" />}
      <Icon
        src="/search.png"
        alt="Search icon"
        className="search__icon"
        id="search__icon"
      />
    </div>
  );
};

export default SearchBox;
