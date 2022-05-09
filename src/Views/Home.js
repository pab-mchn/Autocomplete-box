import CardComponent from "../Components/CardComponent/CardComponent";
/*import { SearchBar } from "../Components/SearchBar/SearchBar";*/
import PlanetChosen from "../Components/PlanetChosen/PlanetChosen";


function Home() {

  return (
    <div>
      <h1> Planets star wars</h1>
      <PlanetChosen/>
      <CardComponent />
    </div>
  );
}

export default Home;
