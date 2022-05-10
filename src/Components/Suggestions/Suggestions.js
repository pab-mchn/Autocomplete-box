import { useContext, useState } from "react";
import { dataContext } from "../context/DataContext";
import PlanetCard from "../PlanetCard/PlanetCard";

const Suggestions = ({ value }) => {
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
        <h1 key={suggested.orbital_period} onClick={handleButtonClick}>
          {suggested.name}
        </h1>
        {buttonClicked ? <PlanetCard suggestions={suggestions} /> : null}
      </>
    );
  });
};

export default Suggestions;
