import { FC } from "react";
import Navigation from "./components/layout/Navigation";
import { Hero, About, Services, Contact } from "./components/sections";
import Projects from "./components/sections/Projects";
import Testimonials from "./components/sections/Testimonials";

const App: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
