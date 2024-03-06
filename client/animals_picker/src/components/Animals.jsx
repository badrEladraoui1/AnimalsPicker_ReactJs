/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AppContext } from "../store/app-context";

import Animal from "./Animal";
import Loading from "./ui/Loading";
import Error from "./ui/Error";
import { styles } from "../assets/commonStyles";

const Animals = ({ props }) => {
  const {
    userAnimals,
    onStartRemoveAnimal,
    isFetchingAnimals,
    userAnimalsError,
  } = useContext(AppContext);

  if (userAnimals.length <= 0) {
    return "";
  }

  if (userAnimalsError) {
    return <Error message="Failed to fetch Animals Data ..." />;
  }

  if (isFetchingAnimals) {
    return <Loading message="Failed to fetch Animals Data ..." />;
  }

  return (
    <article className={styles}>
      {userAnimals.map((userAnimal) => (
        <Animal
          key={userAnimal.id}
          onClick={() => onStartRemoveAnimal(userAnimal.id)}
          name={userAnimal.name}
          imgSrc={userAnimal.image.src}
          imgAlt={userAnimal.image.alt}
        />
      ))}
    </article>
  );
};

export default Animals;
