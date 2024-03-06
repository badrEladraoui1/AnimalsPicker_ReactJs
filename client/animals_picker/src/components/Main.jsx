// import { useContext } from "react";
// import { AppContext } from "../store/app-context";

import Animals from "./Animals";
import AvailableAnimals from "./AvailableAnimals";
import Modal from "./ui/Modal";

const Main = () => {
  return (
    <section className="flex gap-10">
      <Modal />
      <AvailableAnimals props="after" />
      <Animals props="after" />
    </section>
  );
};

export default Main;
