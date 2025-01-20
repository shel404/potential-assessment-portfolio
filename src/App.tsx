import { FC, useState, useEffect } from "react";
import Navigation from "./components/layout/Navigation";
import { Hero, About, Services, Contact, Footer } from "./components/sections";
import Projects from "./components/sections/Projects";
import Testimonials from "./components/sections/Testimonials";
import { useDarkMode } from "./hooks/useDarkMode";
import Loader from "./components/common/Loader";

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useDarkMode();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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
