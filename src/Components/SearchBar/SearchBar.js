import React, { useState } from "react";
import Suggestions from "../Suggestions/Suggestions";

import "./SearchBar.css";

export const SearchBar = () => {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
    console.log(value);
  }

  return (
    <>
      <form>
        <input
          onChange={handleChange}
          id="input"
          className="search-planets"
          type="text"
          placeholder="Search
        Planets..."
        ></input>
      </form>
      <div>
        {value ? <Suggestions value={value} /> : "" }
      </div>
    </>
  );
};
