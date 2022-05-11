import { useContext, useState } from "react";
import { dataContext } from "../context/DataContext";
import PlanetCard from "../PlanetCard/PlanetCard";

const Suggestions = ({ value, id }) => {
  const { data } = useContext(dataContext);

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  const suggestions = data.filter((planet) => {
    return planet.name.toLowerCase().startsWith(value);
  });

  console.log(suggestions);

  return suggestions.map((suggested) => {
    return (
      <>
        <div className="suggestedList" key={suggested.orbital_period}>
          <h4 onClick={handleButtonClick}>{suggested.name}</h4>
        </div>
        {buttonClicked && <PlanetCard suggestions={suggestions} id={id} />}
      </>
    );
  });
};

export default Suggestions;
