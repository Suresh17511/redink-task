import React, { useState } from "react";

const initialState = {
  level: 0,
  category_name: "",
  parent_category: "leftDropDown",
};

const Main = (props) => {
  const { dropDown, setDropDown } = props;
  const [dropdownData, setDropdownData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    let level = dropdownData.parent_category.split(",").length;
    setDropDown([
      ...dropDown,
      {
        id: dropDown.length + 1,
        level: level,
        name: dropdownData.category_name,
        parent_category: dropdownData.parent_category,
      },
    ]);
    setDropdownData(initialState);
  };

  return (
    <main>
      <div className="form_container">
        <h3>Add a New Category</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="category_name">Category Name:</label>
          <input
            type="text"
            id="category_name"
            value={dropdownData.category_name}
            onChange={(e) =>
              setDropdownData({
                ...dropdownData,
                category_name: e.target.value,
              })
            }
          />
          <label htmlFor="parent_category">Parent Category:</label>
          <select
            name="parent_category"
            id="parent_category"
            onChange={(e) =>
              setDropdownData({
                ...dropdownData,
                parent_category: e.target.value,
              })
            }
            value={dropdownData.parent_category}
          >
            <option value="leftDropDown">LeftDropDown</option>
            {dropDown
              .filter((list) => {
                return list.level < 3;
              })
              .map((data, i) => (
                <option key={i} value={`${data.name},${data.parent_category}`}>
                  {data.name}
                </option>
              ))}
          </select>
          <input type="submit" value="Add Category" className="button" />
        </form>
      </div>
    </main>
  );
};

export default Main;
