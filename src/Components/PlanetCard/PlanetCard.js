import "./PlanetCard.css";
import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const PlanetCard = () => {
  const { planet, setPlanet } = useContext(dataContext);
  const deletePlanet = (i) => {
    const newPlanet = [...planet];
    newPlanet.splice(i, 1);
    setPlanet(newPlanet);
  };
  return planet.map((suggested) => {
    return (
      <div className='PlanetContainer'>
        <div className='PlanetItem' key={suggested.orbital_period}>
          <h3>Name: {suggested.name}</h3>
          <h3> Year of creation : {suggested.created}</h3>
          <h3>Diameter : {suggested.diameter}</h3>
          <h3>Population : {suggested.population}</h3>
          <button onClick={() => deletePlanet(suggested.name)}>Delete</button>
        </div>
      </div>
    );
  });
};

export default PlanetCard;
