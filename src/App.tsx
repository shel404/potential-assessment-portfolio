import { FC } from "react";
import Navigation from "./components/layout/Navigation";
import { Hero, About, Services } from "./components/sections";
import Projects from "./components/sections/Projects";

const App: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
    </div>
  );
};

export default App;
