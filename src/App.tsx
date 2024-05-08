import "./App.scss";
import Header from "./Header/Header";
import Hero from "./Hero/hero.tsx";
import NavMobile from "./Nav-Mobile/NavMobile.tsx";
import Services from "./Services/Services.tsx";

function App() {
  return (
    <>
      <Header />
      <NavMobile />
      <Hero />
      <Services />
    </>
  );
}

export default App;
