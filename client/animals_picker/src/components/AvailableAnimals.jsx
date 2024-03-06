/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AppContext } from "../store/app-context";

import Error from "./ui/Error";
import Loading from "./ui/Loading";
import { styles } from "../assets/commonStyles";

// #4c4c4c

import Animal from "./Animal";

const AvailableAnimals = ({ props }) => {
  const { animals, onSelectAnimal, animalsError, isFetchingUserAnimals } =
    useContext(AppContext);

  if (animalsError) {
    return <Error message="Failed to fetch Available Animals Data ..." />;
  }

  if (isFetchingUserAnimals) {
    return <Loading message="Fetching Available Animals " />;
  }

  return (
    <article className={styles}>
      {animals.map((animal) => (
        <Animal
          key={animal.id}
          name={animal.name}
          imgSrc={animal.image.src}
          imgAlt={animal.image.alt}
          onClick={() => onSelectAnimal(animal)}
        />
      ))}
    </article>
  );
};

export default AvailableAnimals;
