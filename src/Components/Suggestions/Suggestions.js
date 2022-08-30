import { useContext, useState } from "react";
import { dataContext } from "../context/DataContext";
import "./Suggestions.css";

const Suggestions = () => {
  const { data, value, planet, setPlanet } = useContext(dataContext);

  const addPlanet = (i) => {
    const repeat = planet.some((repeatPlanet) => repeatPlanet.name === i);

    if (repeat) {
      alert("ese planeta ya esta");
    } else {
      const newPlanet = [...suggestions, ...planet];
      setPlanet(newPlanet);
    }
  };

  const suggestions = data.filter((planet) => {
    return planet.name.toLowerCase().startsWith(value);
  });

  return suggestions.map((suggested) => {
    return (
      <>
        <div className='suggestedList' key={suggested.orbital_period} onClick={() => addPlanet(suggested.name)}>
          <h4>{suggested.name}</h4>
        </div>
      </>
    );
  });
};

export default Suggestions;
