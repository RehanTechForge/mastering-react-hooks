import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./styles.css";
const HiddenSearchBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <div>
      {showSearchBar ? (
        <div>
          <section onClick={() => setShowSearchBar(!showSearchBar)}></section>
          <input type="text" name="" id="" placeholder="Search Here..." />
        </div>
      ) : (
        <span>
          <FaSearch onClick={() => setShowSearchBar(!showSearchBar)} />
        </span>
      )}
    </div>
  );
};

export default HiddenSearchBar;
