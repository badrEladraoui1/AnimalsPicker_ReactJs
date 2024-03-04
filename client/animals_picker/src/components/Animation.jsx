import animationData from "../assets/AnimationPanda.json";
import Lottie from "lottie-react";

const Animation = () => {
  return (
    <Lottie className="size-80" animationData={animationData} loop={true} />
  );
};

export default Animation;
