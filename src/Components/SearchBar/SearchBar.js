import React, { useState, useContext } from "react";
import Suggestions from "../Suggestions/Suggestions";
import { dataContext } from "../context/DataContext";

import "./SearchBar.css";

export const SearchBar = () => {
  const { value, setValue } = useContext(dataContext);

  function handleChange(event) {
    setValue(event.target.value);
    console.log(value);
  }

  return (
    <>
      <form>
        <input
          onChange={handleChange}
          id='input'
          className='search-planets'
          type='text'
          placeholder='Search
        Planets...'></input>
        <div>{value ? <Suggestions /> : "Search Star Wars Planets"}</div>
      </form>
    </>
  );
};
