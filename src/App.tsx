import { FC } from "react";
import Navigation from "./components/layout/Navigation";
import { Hero, About, Services } from "./components/sections";

const App: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default App;
