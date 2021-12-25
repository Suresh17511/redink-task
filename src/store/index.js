import { createStore } from "redux";
import dropdownReducer from "./DropDownMenu/reducers";

const store = createStore(dropdownReducer);

export default store;
