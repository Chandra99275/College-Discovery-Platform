import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>

      <div className="search-input-wrapper">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          value={searchValue}
          onChange={(event) =>
            setSearchValue(event.target.value)
          }
          placeholder="Search colleges, courses or locations..."
        />
      </div>

      <button type="submit" className="search-button">
        Search
      </button>

    </form>
  );
}

export default SearchBar;