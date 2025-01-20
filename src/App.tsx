import { FC } from "react";
import LandingPage from "./components/pages/LandingPage";
import AboutMe from "./components/pages/AboutMe";

const App: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/src/assets/images/logo.png"
            alt="Mumair Logo"
            className="h-12"
          />
        </div>

        <div className="flex items-center gap-8">
          <a href="#home" className="text-black-800 hover:text-orange-500">
            Home
          </a>
          <a href="#about" className="text-black-800 hover:text-orange-500">
            About Me
          </a>
          <a href="#services" className="text-black-800 hover:text-orange-500">
            Services
          </a>
          <a href="#projects" className="text-black-800 hover:text-orange-500">
            Projects
          </a>
          <a
            href="#testimonials"
            className="text-black-800 hover:text-orange-500"
          >
            Testimonials
          </a>
          <a href="#contact" className="text-black-800 hover:text-orange-500">
            Contact
          </a>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
            Download CV
          </button>
        </div>
      </nav>

      <LandingPage />
      <AboutMe />
    </div>
  );
};

export default App;
