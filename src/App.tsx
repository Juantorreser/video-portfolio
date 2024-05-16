import "./App.scss";
import Header from "./Header/Header.tsx";
import Hero from "./Hero/hero.tsx";
import NavMobile from "./Nav-Mobile/NavMobile.tsx";
import Services from "./Services/Services.tsx";
import Skills from "./Skills/Skills.tsx";
import Work from "./Work/Work.tsx";
import Contact from "./Contact/Contact.tsx";

function App() {
  return (
    <>
      <Header />
      <NavMobile />
      <Hero />
      <Services />
      <Skills />
      <Work />
      <Contact/>
    </>
  );
}

export default App;
