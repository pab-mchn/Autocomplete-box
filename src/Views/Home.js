import CardComponent from "../Components/CardComponent/CardComponent";
import { SearchBar } from "../Components/SearchBar/SearchBar";


function Home() {

  return (
    <div>
      <h1> Planets star wars</h1>
      <SearchBar />
      <CardComponent/>
    </div>
  );
}

export default Home;
