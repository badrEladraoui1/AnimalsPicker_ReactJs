/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AppContext } from "../store/app-context";

// #4c4c4c

import Animal from "./Animal";

const AvailableAnimals = ({ props }) => {
  const { animals, onSelectAnimal } = useContext(AppContext);

  return (
    <article className="w-1/2 text-center flex flex-col items-center  md:grid md:grid-cols-2  md:items-start lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-5 gap-0 container p-1">
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
