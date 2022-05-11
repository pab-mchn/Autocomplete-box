const PlanetCard = ({ suggestions }) => {

  return suggestions.map((suggested) => {
    return (
      <>
        <h1 id={suggested.orbital_period} key={suggested.orbital_period}>
          {suggested.name}
        </h1>
        <h3>{suggested.created}</h3>
        <h4>{suggested.diameter}</h4>
        <h5>{suggested.population}</h5>
      </>
    );
  });
};

export default PlanetCard;
