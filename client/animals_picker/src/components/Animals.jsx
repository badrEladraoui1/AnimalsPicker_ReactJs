/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AppContext } from "../store/app-context";

import Animal from "./Animal";

const Animals = ({ props }) => {
  const { userAnimals, onStartRemoveAnimal } = useContext(AppContext);

  return (
    <article className="w-1/2 text-center flex flex-col items-center  md:grid md:grid-cols-2  md:items-start lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-5 gap-0 container p-1">
      {userAnimals.map((userAnimal) => (
        <Animal
          key={userAnimal.id}
          onClick={() => onStartRemoveAnimal(userAnimal)}
          name={userAnimal.name}
          imgSrc={userAnimal.image.src}
          imgAlt={userAnimal.image.alt}
        />
      ))}
    </article>
  );
};

export default Animals;
