import "./PlanetCard.css"

const PlanetCard = ({ suggestions }) => {

  return suggestions.map((suggested) => {
    return (
      <div className="PlanetCointainer" id={suggested.orbital_period} key={suggested.orbital_period}>
        <h3>Name: {suggested.name}</h3>
        <h3> Year of creation : {suggested.created}</h3>
        <h3>Diameter : {suggested.diameter}</h3>
        <h3>Population : {suggested.population}</h3>
      </div>
    );
  });
};

export default PlanetCard;
