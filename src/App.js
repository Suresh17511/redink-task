import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { useDispatch } from "react-redux";
import { addDropdown } from "./store/DropDownMenu/actions";

function App() {
  const [dropDown, setDropDown] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addDropdown(dropDown));
  }, [dropDown, dispatch]);

  return (
    <div className="App">
      <Header />
      <Main dropDown={dropDown} setDropDown={setDropDown} />
    </div>
  );
}

export default App;
