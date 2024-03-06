/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useRef, useState } from "react";
import { fetchingAnimals } from "../../http";
import { fetchingUserAnimals, updateAnimaPlaces } from "../../http";
import { useFetch } from "../hooks/useFetch";

export const AppContext = createContext({
  animals: [],
  userAnimals: [],
  modalOpen: "",
  isFetchingAnimals: "",
  userAnimalsError: "",
  animalsError: "",
  isFetchingUserAnimals: "",
  onSelectAnimal: () => {},
  onStartRemoveAnimal: () => {},
  onCancelRemoveAnimal: () => {},
  onRemoveAnimal: () => {},
});

export default function ContextProvider({ children }) {
  const animalRefSelected = useRef();
  const [modalOpen, setModalOpen] = useState(false);

  const onSelectAnimal = async (animalSelected) => {
    setUserAnimals((prevAnimals) => {
      if (!prevAnimals) return [];
      if (prevAnimals.some((animal) => animal.id === animalSelected.id)) {
        return prevAnimals;
      } else {
        return [...prevAnimals, animalSelected];
      }
    });
    try {
      await updateAnimaPlaces([animalSelected, ...userAnimals]);
    } catch (error) {
      setUserAnimals(userAnimals);
      setUserAnimalError({
        message: error.message || "Failed to update animals",
      });
    }
  };

  const onRemoveAnimal = async () => {
    setUserAnimals((prevAnimals) => {
      const filteredList = prevAnimals.filter(
        (animal) => animal.id !== animalRefSelected.current
      );
      return [...filteredList];
    });
    setModalOpen(false);
    try {
      await updateAnimaPlaces(
        userAnimals.filter((animal) => animal.id !== animalRefSelected.current)
      );
    } catch (error) {
      setUserAnimals(userAnimals);
      setUserAnimalError({
        message: error.message || "Failed to remove animals",
      });
    }
  };

  const onStartRemoveAnimal = (id) => {
    animalRefSelected.current = id;
    setModalOpen(true);
  };

  // console.log(animalRefSelected);

  const onCancelRemoveAnimal = () => {
    setModalOpen(false);
  };

  const {
    isFetching: isFetchingAnimals,
    error: animalsError,
    setError: setAnimalError,
    dataFetched: animals,
    setDataFetched: setAnimals,
  } = useFetch(fetchingAnimals, []);

  const {
    isFetching: isFetchingUserAnimals,
    error: userAnimalsError,
    setError: setUserAnimalError,
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
    onRemoveAnimal: onRemoveAnimal,
    isFetchingAnimals: isFetchingAnimals,
    userAnimalsError: userAnimalsError,
    animalsError: animalsError,
    isFetchingUserAnimals: isFetchingUserAnimals,
  };

  // console.log("AppContext : ", ctxValues.animals);

  return (
    <AppContext.Provider value={ctxValues}>{children}</AppContext.Provider>
  );
}
