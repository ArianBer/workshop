import React, { useState, useEffect } from "react";

const Sidebar = ({ setCategoryClicked }) => {
  const [category, setCategory] = useState([""]);
  const [categoryParent, setcategoryParent] = useState([""]);
    const [childVisible, setChildVisiblity] = useState(false);

  useEffect(() => {
    fetch("https://frakton.dev/articles.php")
      .then((res) => res.json())
      .then((data) => {setCategory(data);setcategoryParent(data)});
  }, []);

  const returnCategories = (parent, children, subChildren, subsubChildren) => {
    const parentCategory = parent ? parent + "/": "";
    const childrenCategory = children ? children + "/" : "";
    const subChildrenCategory = subChildren ? subChildren + "/" : "";
    const subsubChildrenCategory = subsubChildren ? subsubChildren + "/" : "";

    setCategoryClicked(
      parentCategory  +
      childrenCategory +
      subChildrenCategory +
      subsubChildrenCategory
    );

  };

  return (
    <div className="sidebar">
      <h3>Filter by Category</h3>
      <ul>
        {categoryParent.filter((res) => res.parent === 0).map((parent) => (
          <li>
            <input type="checkbox" id="option" onClick={(e) => {returnCategories(e.target.checked ?  parent.name : null);setChildVisiblity((v) => !v)}}/>
            <label for="option" >
              {parent.name}
            </label>
            <ul>
                {category.filter((res) => res.parent === parent.id)
                .map((subParent) => (
                  <li>
                    <input
                      type="checkbox"
                      id="option"
                      onClick={(e) =>
                        returnCategories(parent.name, e.target.checked ? subParent.name : null)
                      }
                    />
                    <label for="option"> {subParent.name}</label>
                    <ul>
                      {category
                        .filter((res) => res.parent === subParent.id)
                        .map((subsubParent) => (
                          <li>
                            <input
                              type="checkbox"
                              id="option"
                              onClick={(e) =>
                                returnCategories(
                                  parent.name,
                                  subParent.name,
                                  e.target.checked ?
                                  subsubParent.name :
                                  null
                                )
                              }
                            />
                            <label for="option"> {subsubParent.name}</label>
                            <ul>
                              {category
                                .filter((res) => res.parent === subsubParent.id)
                                .map((lastChildren) => (
                                  <li>
                                    <input
                                      type="checkbox"
                                      id="option"
                                      onClick={(e) =>
                                        returnCategories(
                                          parent.name,
                                          subParent.name,
                                          subsubParent.name,
                                          e.target.checked ?
                                          lastChildren.name :null
                                        )
                                      }
                                    />
                                    <label for="option">
                                      {lastChildren.name}
                                    </label>
                                  </li>
                                ))}
                            </ul>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default Sidebar;
