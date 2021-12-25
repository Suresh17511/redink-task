import { ADD_DROPDOWN } from "./constants";

const initialState = {
  leftDropDown: [],
};

const dropdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DROPDOWN:
      return {
        leftDropDown: action.payload,
      };
    default:
      return state;
  }
};

export default dropdownReducer;
