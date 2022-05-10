import React, {useContext} from 'react'
import { dataContext } from "../context/DataContext";

const CardComponent = () => {
  const { data} = useContext(dataContext);

  return data.map((planet) => (

      <h2 key={planet.orbital_period}>{planet.name}</h2>

  ));
  }

export default CardComponent
