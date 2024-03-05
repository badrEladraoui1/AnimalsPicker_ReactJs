// import Animation from "./components/Animation";
import Header from "./components/Header";
import Main from "./components/Main";
import ContextProvider from "./store/app-context";

const App = () => {
  return (
    <ContextProvider>
      <main>
        <Header />
        <Main />
      </main>
    </ContextProvider>
  );
};

export default App;
