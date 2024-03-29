import { SearchBar } from "../Components/SearchBar/SearchBar";
import PlanetCard from "../Components/PlanetCard/PlanetCard";

function Home() {
  return (
    <div>
      <img
        src='https://imgs.search.brave.com/Y04cNq9ErZl3n51of5ymAqmbCICSWybSyxyKWgif1WA/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/U0JNaGdsSV9CWDNK/NEEyczdYSHhRSGFF/OCZwaWQ9QXBp'
        alt='Logo'
      />
      <SearchBar />
      <PlanetCard />
    </div>
  );
}

export default Home;
