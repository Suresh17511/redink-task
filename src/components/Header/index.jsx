import React, { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const dropdown_menu = useSelector((state) => state.leftDropDown);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <ul className="top_level">
        <li>
          <button>HomePage</button>
        </li>
        <li onClick={() => setOpenMenu(!openMenu)}>
          <div className="leftDropDown">
            <button>LeftDropDown</button>
            {dropdown_menu.length > 0 && openMenu ? (
              <i className="fa fa-sort-asc"></i>
            ) : (
              dropdown_menu.length > 0 &&
              !openMenu && <i className="fa fa-sort-desc"></i>
            )}
          </div>

          {openMenu && (
            <ul className="level_1">
              {dropdown_menu
                .filter((level) => {
                  return level.level === 1;
                })
                .map((item, i) => (
                  <li key={i}>
                    {item.name}
                    <ul className="level_2">
                      {dropdown_menu
                        .filter((l) => {
                          return l.parent_category.split(",")[0] === item.name;
                        })
                        .map((sub, i) => (
                          <li key={i}>
                            {sub.name}
                            <ol className="level_3">
                              {dropdown_menu
                                .filter((t_sub) => {
                                  return (
                                    t_sub.parent_category.split(",")[0] ===
                                    sub.name
                                  );
                                })
                                .map((s_sub_item, i) => (
                                  <li key={i}>{s_sub_item.name}</li>
                                ))}
                            </ol>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
            </ul>
          )}
        </li>
        <li>
          <button>MegaMenu</button>
        </li>
        <li>
          <button>Any Page</button>
        </li>
        <li>
          <button>RightDropDown</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
