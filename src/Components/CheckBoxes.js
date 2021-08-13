import React,{useEffect, useState} from "react";
import Tree from "./CheckBox";
import '../App.css';

const treeData = [
  {
    key: "0",
    label: "Documents",
    icon: "fa fa-folder",
    title: "Documents Folder",
    children: [
      {
        key: "0-0",
        label: "Document 1-1",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [
          {
            key: "0-1-1",
            label: "Document-0-1.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-2",
            label: "Document-0-2.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-3",
            label: "Document-0-3.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-4",
            label: "Document-0-4.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Desktop",
    icon: "fa fa-desktop",
    title: "Desktop Folder",
    children: [
      {
        key: "1-0",
        label: "document1.doc",
        icon: "fa fa-file",
        title: "Documents Folder",
      },
      {
        key: "0-0",
        label: "documennt-2.doc",
        icon: "fa fa-file",
        title: "Documents Folder",
      },
    ],
  },
  {
    key: "2",
    label: "Downloads",
    icon: "fa fa-download",
    title: "Downloads Folder",
    children: [],
  },
];

const TreeList = () => {
    const [category, setCategory] = useState(['']);
    const [category1, setCategory1] = useState(['']);


    // if(category){
    //     setCategory1([
    //         category.map(parent => {
    //             {
    //                 "id"= parent.id,
    //                 "name"= parent.name
    //             }
    //         })
    //     ])
    // }
    
    useEffect(() => {
        fetch('https://frakton.dev/articles.php')
        .then(res => res.json())
        .then(data => {setCategory(data);console.log(data)});
    },[]);


  return (
    <>
      <div className="sidebar">
        <div className="col text-center">
        <h3>Filter by Category</h3>
          <p className="mt-3">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8 text-left text-dark">
                <Tree data={category} />
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default TreeList;