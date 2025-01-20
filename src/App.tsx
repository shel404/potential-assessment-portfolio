import { FC } from "react";
import Navigation from "./components/layout/Navigation";
import { Hero, About, Services, Contact, Footer } from "./components/sections";
import Projects from "./components/sections/Projects";
import Testimonials from "./components/sections/Testimonials";
import { useDarkMode } from "./hooks/useDarkMode";

const App: FC = () => {
  useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-black-800 text-black-950 dark:text-white transition-colors duration-200 pt-20">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
