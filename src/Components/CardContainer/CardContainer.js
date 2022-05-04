import React, { useState, useEffect } from "react";
import CardComponent from "../CardComponent/CardComponent";
import axios from "axios";

function CardContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://swapi.dev/api/planets")
    .then((res) => setData(res.data.results));
  }, []);
  console.log(data);

  return (
    <div className="CardContainer">
      <CardComponent data={data} />
    </div>
  );
}

export default CardContainer;
