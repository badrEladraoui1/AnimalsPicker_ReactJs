/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useRef, useState } from "react";
import { fetchingAnimals } from "../../http";
import { fetchingUserAnimals } from "../../http";
import { useFetch } from "../hooks/useFetch";

export const AppContext = createContext({
  animals: [],
  userAnimals: [],
  modalOpen: "",
  onSelectAnimal: () => {},
  onStartRemoveAnimal: () => {},
  onCancelRemoveAnimal: () => {},
});

export default function ContextProvider({ children }) {
  const animalRefSelected = useRef();
  const [modalOpen, setModalOpen] = useState(false);

  const onSelectAnimal = (animalSelected) => {
    setUserAnimals((prevAnimals) => {
      if (!prevAnimals) return [];
      if (prevAnimals.some((animal) => animal.id === animalSelected.id)) {
        return prevAnimals;
      } else {
        return [...prevAnimals, animalSelected];
      }
    });
  };

  const onStartRemoveAnimal = (animal) => {
    setModalOpen(true);
  };

  const onCancelRemoveAnimal = () => {
    setModalOpen(false);
  };

  const {
    isFetching: isFetchingAnimals,
    error: animalsError,
    dataFetched: animals,
    setDataFetched: setAnimals,
  } = useFetch(fetchingAnimals, []);

  const {
    isFetching: isFetchingUserAnimals,
    error: userAnimalsError,
    dataFetched: userAnimals,
    setDataFetched: setUserAnimals,
  } = useFetch(fetchingUserAnimals, []);

  // console.log(userAnimals);

  const ctxValues = {
    animals: animals,
    onSelectAnimal: onSelectAnimal,
    userAnimals: userAnimals,
    onStartRemoveAnimal: onStartRemoveAnimal,
    modalOpen: modalOpen,
    onCancelRemoveAnimal: onCancelRemoveAnimal,
  };

  // console.log("AppContext : ", ctxValues.animals);

  return (
    <AppContext.Provider value={ctxValues}>{children}</AppContext.Provider>
  );
}
