/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext } from "react";
import { fetchingAnimals } from "../../http";
import { useFetch } from "../hooks/useFetch";

export const AppContext = createContext({
  animals: [],
});

export default function ContextProvider({ children }) {
  const {
    isFetching,
    error,
    dataFetched: animals,
    setDataFetched: setAnimals,
  } = useFetch(fetchingAnimals, []);

  const ctxValues = {
    animals: animals,
  };

  // console.log("AppContext : ", ctxValues.animals);

  return (
    <AppContext.Provider value={ctxValues}>{children}</AppContext.Provider>
  );
}
