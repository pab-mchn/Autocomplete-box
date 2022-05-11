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
        <div key={suggested.orbital_period}>
          <ul>
            <li onClick={handleButtonClick}>{suggested.name}</li>
          </ul>
        </div>
        {buttonClicked ? (
          <PlanetCard suggestions={suggestions} id={id} />
        ) : null}
      </>
    );
  });
};

export default Suggestions;
