import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    axios("https://swapi.dev/api/planets").then((res) => setData(res.data.results));
    console.log(data);
  }, []);

  return (
    <dataContext.Provider
      value={{
        data,
        setData,
        planet,
        setPlanet,
        value,
        setValue,
      }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
