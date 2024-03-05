import Animation from "./Animation";

const Header = () => {
  return (
    <header className="w-screen flex flex-col justify-center items-center">
      <Animation />
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-6xl font-bold text-center">Animals Picker</h1>
        <p className="italic">Pick your favorite animals!</p>
      </div>
    </header>
  );
};

export default Header;
