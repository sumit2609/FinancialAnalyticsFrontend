
import { useState } from 'react';
import SearchIcon from '../../assets/search_icon.svg';
import './SearchBar.scss';

const SearchBar = ({handleSearch,setQuery,query}) => {

  const handleChange = (e) => {
    setQuery(e.target.value);
  };


  return (
    <div className="search-bar-container">
      <input 
        type="text" 
        value={query}
        onChange={handleChange}
        placeholder="Search for anything..." 
        className="search-input"
      />
      <button onClick={handleSearch} className="search-icon-btn" style={{pointerEvents:query === "" ? "none":'auto'}}>
            <img src={SearchIcon} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
