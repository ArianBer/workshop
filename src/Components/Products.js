import React, { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";

import CardItem from "../CardItem";
import Pagination from "../Pagination";
import Search from "../Search";
import { useStyles } from "./styles";

const Card = (props) => {
  const { activeFilter } = props;
  const classes = useStyles();
  const data = useSelector((state) => state.perfume.collections);
  const [searchPerfume, setSearchPerfume] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perfumesPerPage, setPerfumesPerPage] = useState(3);

  console.log("activeFilter: ", activeFilter);

  const filteredPerfumes = useMemo(() => {
    const hasCategoryFilter = Object.values(activeFilter).includes(true);

    const matchesCategories = (perfume) => {
      if (hasCategoryFilter) {
        return perfume.categories.some(
          (category) => activeFilter[category] === true
        );
      } else return true;
    };

    return data
      .filter((perfume) =>
        perfume.name.toLowerCase().includes(searchPerfume.toLowerCase())
      )
      .filter(matchesCategories);
  }, [data, searchPerfume, activeFilter]);

  const currentPerfumes = filteredPerfumes.slice(
    (currentPage - 1) * perfumesPerPage,
    currentPage * perfumesPerPage
  );
  const pages = Math.ceil(filteredPerfumes.length / perfumesPerPage);

  useEffect(() => {
    if (currentPage > pages) {
      setCurrentPage(1);
    }
  }, [currentPage, pages]);

  const pageNumbers = Array(pages)
    .fill(null)
    .map((val, index) => index + 1);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Search
        data-testid="input-filter-id"
        setSearchPerfume={setSearchPerfume}
      />
      {currentPerfumes
        .filter((perfume) => {
          return (
            perfume.name.toLowerCase().indexOf(searchPerfume.toLowerCase()) >= 0
          );
        })
        .map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      <Pagination
        pageNumbers={pageNumbers}
        handleClick={handleClick}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Card;
