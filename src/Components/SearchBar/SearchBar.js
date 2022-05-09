import React, { useContext, useState } from "react";
import { dataContext } from "../context/DataContext";
import Suggestions from "../Suggestions/Suggestions";

export const SearchBar = () => {
  const { data } = useContext(dataContext);
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
    console.log(value);
  }

  const suggestions = data.filter((planet) => {
    return planet.name.toLowerCase().startsWith(value);
  });
  console.log(suggestions);

   const onSubmit = (e) => {
     e.preventDefault();
     const userInput = value;
     console.log(userInput);
   };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={handleChange}
          id="input"
          className="search-planets"
          type="text"
          placeholder="Search
        Planets..."
        ></input>
        <button>add</button>
      </form>
      {value ? <Suggestions value={value} /> : ""}
    </>
  );
};
