import React, { useState, useEffect } from "react";

const Sidebar = ({ setCategoryClicked }) => {
  const [category, setCategory] = useState([""]);
  const [categoryParent, setcategoryParent] = useState([""]);

  useEffect(() => {
    fetch("https://frakton.dev/articles.php")
      .then((res) => res.json())
      .then((data) => {setCategory(data);setcategoryParent(data)});
  }, []);

  const Tree = ({ data = [] }) => {
    return (
      <div className="d-tree">
        <ul className="d-flex d-tree-container flex-column">
          {data.map((tree) => (
            <TreeNode node={tree} />
          ))}
        </ul>
      </div>
    );
  };
  
  const TreeNode = ({ node }) => {
    const [childVisible, setChildVisiblity] = useState(false);
  
    const hasChild = node.children ? true : false;
  
    return (
      <li className="d-tree-node border-0">
        <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
          {hasChild && (
            <div
              className={`d-inline d-tree-toggler ${
                childVisible ? "active" : ""
              }`}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
                  <symbol id="checkmark" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-miterlimit="10" fill="none"  d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                      </path>
                  </symbol>
              </svg>
              <input id="tmp" type="checkbox" class="promoted-input-checkbox"/>
              <svg><use xlinkHref="#checkmark" /></svg>      
            </div>
          )}
  
          <div className="col d-tree-head">
            {node.name}
          </div>
        </div>
  
        {hasChild && childVisible && (
          <div className="d-tree-content">
            <ul className="d-flex d-tree-container flex-column">
              <Tree data={node.children} />
            </ul>
          </div>
        )}
      </li>
    );
  };
  
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

  console.log(categoryParent.forEach(element => {
    
  }));

  return (
    <div className="sidebar">
      <h3>Filter by Category</h3>
      <ul>
        {categoryParent.filter((res) => res.parent === 0).map((parent) => (
          <li>
            <input type="checkbox" id="option" onClick={(e) => returnCategories(parent.name)}/>
            <label for="option" >
              {parent.name}
            </label>
            <ul>
              {category
                .filter((res) => res.parent === parent.id)
                .map((subParent) => (
                  <li>
                    <input
                      type="checkbox"
                      id="option"
                      onClick={() =>
                        returnCategories(parent.name, subParent.name)
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
                              onClick={() =>
                                returnCategories(
                                  parent.name,
                                  subParent.name,
                                  subsubParent.name
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
                                      onClick={() =>
                                        returnCategories(
                                          parent.name,
                                          subParent.name,
                                          subsubParent.name,
                                          lastChildren.name
                                        )
                                      }
                                    />
                                    <label for="option">
                                      {" "}
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
