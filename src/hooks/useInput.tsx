import { ChangeEvent, useReducer } from "react";

function inputReducer(state: any, action: any) {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return { city: "" };
    default:
      throw new Error("Unsupported action type");
  }
}

const useInput = (initialValue: {
  city: string;
}): [{ city: string }, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [state, dispatch] = useReducer(inputReducer, initialValue);

  dispatch;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_FIELD",
      field: name,
      value,
    });
  };

  return [state, handleChange];
};

export default useInput;
