import { ADD_DROPDOWN } from "./constants";

export const addDropdown = (data) => {
  return {
    type: ADD_DROPDOWN,
    payload: data,
  };
};
