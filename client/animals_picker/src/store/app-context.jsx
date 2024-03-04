/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import { fetchingAnimals } from "../../http";
import { useFetch } from "../hooks/useFetch";

export const AppContext = createContext({
  animals: [],
});

export default function ContextProvider() {
  //   const [animals, setAnimals] = useState([]);

  const {
    isFetching,
    error,
    dataFetched: animals,
    setDataFetched: setAnimals,
  } = useFetch(fetchingAnimals, []);

  const ctxValues = {
    animals: animals,
  };

  return <AppContext.Provider value={ctxValues} />;
}
