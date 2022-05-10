import React from "react";

const PlanetCard = ({ suggestions }) => {
  return suggestions.map((suggested) => {
    return (
      <>
        <h1 key={suggested.orbital_period}>{suggested.name}</h1>
        <button>delete</button>
      </>
    );
  });
};

export default PlanetCard;
