import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
   const [value, setValue] = useState("");

   function handleChange(event) {
     setValue(event.target.value);
     console.log(value);
   }
   const suggestions = data.filter((planet) => {
     return planet.name.toLowerCase().startsWith(value);
   });
  useEffect(() => {
    axios("https://swapi.dev/api/planets").then((res) =>
      setData(res.data.results)
    );
  }, []);

  return (
    <dataContext.Provider
      value={{
        data,
        setData,
        value,
        setValue,
        handleChange,
        suggestions,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
