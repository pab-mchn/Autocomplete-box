import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './Components/context/DataContext';
import Home from "./Views/Home"
import './App.css';


function App() {


  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
