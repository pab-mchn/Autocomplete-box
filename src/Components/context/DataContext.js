import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://swapi.dev/api/planets").then((res) =>
      setData(res.data.results)
    );
  }, []);

  return (
    <dataContext.Provider value={{ data, setData }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
