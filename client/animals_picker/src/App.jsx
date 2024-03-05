// import Animation from "./components/Animation";

import ContextProvider from "./store/app-context";

import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <ContextProvider>
      <main className="flex flex-col gap-20">
        <Header />
        <Main />
      </main>
    </ContextProvider>
  );
};

export default App;
