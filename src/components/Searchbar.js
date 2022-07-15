import React, { useState } from "react";
import SearchIcon from "./images/search.svg";
import Styles from "./Searchbar.module.css";

const Searchbar = ({ onSearchChange, onSearchMovies, onHandleEnterPress }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={Styles.search}>
      <input
        onChange={(e) => {
          onSearchChange(e.target.value);
          setSearchTerm(e.target.value);
        }}
        onKeyPress={onHandleEnterPress}
        placeholder="Search for movies"
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => onSearchMovies(searchTerm)}
      />
    </div>
  );
};

export default Searchbar;
