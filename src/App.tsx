import { FC } from "react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
} from "./components/icons/SocialIcons";

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

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold mb-2">Hi I am</h2>
            <h1 className="text-2xl font-semibold mb-2">
              <span className="text-orange-500">Muhammad Umair</span>
            </h1>
            <h1 className="text-7xl font-bold mb-6">
              UI & UX
              <br />
              <span className="ml-36">Designer</span>
            </h1>
            <p className="text-black-600 mb-8">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600">
              Hire Me
            </button>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <img
              src="/src/assets/images/profile.png"
              alt="Profile"
              className="w-[500px] h-auto"
            />
            {/* Social Icons */}
            <div className="absolute -bottom-12 flex justify-center w-full ">
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-black-800 hover:text-orange-500 transition-colors"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="text-black-800 hover:text-orange-500 transition-colors"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="#"
                  className="text-black-800 hover:text-orange-500 transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
                  className="text-black-800 hover:text-orange-500 transition-colors"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
