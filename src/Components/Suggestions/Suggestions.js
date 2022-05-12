import { useContext, useState } from "react";
import { dataContext } from "../context/DataContext";
import PlanetCard from "../PlanetCard/PlanetCard";
import "./Suggestions.css"

const Suggestions = ({value}) => {
  const { data } = useContext(dataContext);

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  const suggestions = data.filter((planet) => {
    return planet.name.toLowerCase().startsWith(value);
  });


  return suggestions.map((suggested) => {
    return (
      <>
        <div className="suggestedList" key={suggested.orbital_period}>
          <h4 onClick={handleButtonClick}>{suggested.name}</h4>
        </div>
        {buttonClicked ? <PlanetCard suggestions={suggestions} /> : ""}
      </>
    );
  });
};

export default Suggestions;
