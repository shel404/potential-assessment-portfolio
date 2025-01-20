import { FC } from "react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../icons/SocialIcons";

const Hero: FC = () => {
  return (
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
          <p className="text-black mb-8">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <a href="#contact" className="btn-primary no-underline px-8 py-3">
            Hire Me
          </a>
        </div>

        {/* Right Content - Profile Image */}
        <div className="relative">
          <img
            src="/src/assets/images/profile.png"
            alt="Profile"
            className="w-[500px] h-auto"
          />
          {/* Social Icons */}
          <div className="absolute -bottom-16 flex justify-center w-full">
            <div className="flex gap-6">
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
  );
};

export default Hero;
