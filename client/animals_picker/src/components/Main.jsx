import { useContext } from "react";
import { AppContext } from "../store/app-context";

import Title from "./ui/Title";
import Animals from "./Animals";
import AvailableAnimals from "./AvailableAnimals";
import Modal from "./ui/Modal";

const Main = () => {
  const classes = "flex flex-col items-center gap-3";

  const { animals, userAnimals } = useContext(AppContext);

  return (
    <section className="flex justify-center gap-10">
      <Modal />
      <section className={classes}>
        {animals.length > 0 && <Title title="Click To Pick" />}
        <AvailableAnimals />
      </section>
      <section className={classes}>
        {userAnimals.length > 0 && <Title title="Your Favorite Animals" />}
        <Animals />
      </section>
    </section>
  );
};

export default Main;
