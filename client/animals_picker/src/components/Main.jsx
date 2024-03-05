// import { useContext } from "react";
// import { AppContext } from "../store/app-context";

import Animals from "./Animals";
import AvailableAnimals from "./AvailableAnimals";
import AlertDialogDemo from "./ui/Modal";

const Main = () => {
  return (
    <section className="flex gap-10">
      <AvailableAnimals props="after" />
      <AlertDialogDemo />
      <Animals props="after" />
    </section>
  );
};

export default Main;
