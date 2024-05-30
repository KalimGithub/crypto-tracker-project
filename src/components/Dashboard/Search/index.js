import React, { useState } from "react";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
function Search({ search, onSearchChange }) {
  return (
    <div className="search-flex">
      <div className="search-icon">
        <SearchRoundedIcon />
      </div>
      <input
        placeholder="Search"
        className="search-input"
        type="text"
        value={search}
        onChange={(e)=>onSearchChange(e)}
      />
    </div>
  );
}

export default Search;
