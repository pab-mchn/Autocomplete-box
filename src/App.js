import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './Components/context/DataContext';
import Home from "./Views/Home"
import PlanetCard from './Components/PlanetCard/PlanetCard';
import './App.css';


function App() {


  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route to='/planet' component={<PlanetCard/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
