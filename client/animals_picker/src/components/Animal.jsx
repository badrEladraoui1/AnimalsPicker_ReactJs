/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import { useContext } from "react";
// import { AppContext } from "../store/app-context";

const Animal = ({ name, imgSrc, imgAlt, onClick }) => {
  // const { onSelectAnimal } = useContext(AppContext);

  return (
    <section className="container flex flex-col items-center justify-center p-1">
      <img
        onClick={onClick}
        className="rounded-lg min-w-40 min-h-40 cursor-pointer"
        src={`http://localhost:3000/${imgSrc}`}
        alt={imgAlt}
      />
      <h1 className="text-white font-bold">{name}</h1>
    </section>
  );
};

export default Animal;
