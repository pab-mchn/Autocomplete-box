import React, { useContext } from "react";
import { dataContext } from "../context/DataContext";

export const SearchBar = () => {
   const { data } = useContext(dataContext);

    function handleChange(event) {
    const input = event.target.value;
    console.log(input);

    const suggestions = data.filter((planet) => {
      return planet.name.toLowerCase().startsWith(input);
    });
    console.log(suggestions);
  }

  return (
    <input
      onChange={handleChange}
      id="input"
      className="search-planets"
      type="text"
      placeholder="Search Planets..."
    ></input>
  );
};
