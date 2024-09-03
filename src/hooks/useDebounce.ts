import { useEffect, useState } from "react";

interface props {
  inputValue: string;
  delay: number;
}

const useDebouncedValue = ({ inputValue, delay }: props) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, delay]);

  return debouncedValue;
};

export default useDebouncedValue;
