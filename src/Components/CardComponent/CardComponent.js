
const CardComponent = ({ data }) => {
  return (
    <div className="CardContainer">
      {data.map((planet) => (
        <div key={planet.id}>
          <h2>{planet.name}</h2>
        </div>
      ))}
    </div>
  );
  }

export default CardComponent
