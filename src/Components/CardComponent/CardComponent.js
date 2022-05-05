import React, {useContext} from 'react'
import { dataContext } from "../context/DataContext";

const CardComponent = () => {
  const { data} = useContext(dataContext);

  return data.map((planet) => (
    <div key={planet.orbital_period}>
      <h2>{planet.name}</h2>
    </div>
  ));
  }

export default CardComponent
