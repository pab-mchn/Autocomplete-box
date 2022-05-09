import { useContext} from "react";
import { dataContext } from "../context/DataContext";

const Suggestions = ({value}) => {
  const { data } = useContext(dataContext);

  const suggestions = data.filter((planet) => {
    return planet.name.toLowerCase().startsWith(value);
  });
  console.log(suggestions);

  return (

   suggestions.map((suggested) => {
     return <h1 key={suggested.orbital_period}>{suggested.name}</h1>;
    })
  );
};

export default Suggestions;
