import { SearchBar } from "../SearchBar/SearchBar";
import { useState, useContext } from "react";
import { dataContext } from "../context/DataContext";
import CardComponent from "../CardComponent/CardComponent";

const PlanetChosen = () => {
  const [value, setValue] = useState('')
  const { data } = useContext(dataContext);

  function handleChange(event) {
    setValue(event.target.value);
    console.log(setValue);

    const suggestions = data.filter((planet) => {
      return planet.name.toLowerCase().startsWith(setValue);
    });
    console.log(suggestions);
  }

  return (
    <>
      <SearchBar value={value} onChange={handleChange}  />
      <CardComponent/>
   </>)
};

export default PlanetChosen;
