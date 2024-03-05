import { useContext } from "react";
import { AppContext } from "../store/app-context";

import Animal from "./Animal";

const Main = () => {
  const { animals } = useContext(AppContext);

  // console.log("Main : ", animals);

  return (
    <section>
      <div>
        {animals.map((animal) => (
          <Animal
            key={animal.id}
            name={animal.name}
            imgSrc={animal.image.src}
            imgAlt={animal.image.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Main;
