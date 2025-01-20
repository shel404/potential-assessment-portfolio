import { FC } from "react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../icons/SocialIcons";

const Footer: FC = () => {
  const navigation = [
    "Home",
    "About Me",
    "Services",
    "Projects",
    "Testimonials",
    "Contact",
  ];

  return (
    <footer className="bg-gray-50 dark:bg-black-800 pt-20 transition-colors duration-200">
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <a href="#home">
            <img
              src="/src/assets/images/logo.png"
              alt="Mumair"
              className="h-12 block dark:hidden"
            />
            <img
              src="/src/assets/images/logo-dark.png"
              alt="Mumair"
              className="h-12 hidden dark:block"
            />
          </a>
        </div>

        {/* Navigation */}
        <nav className="mb-8 px-4">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {navigation.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-black dark:text-white hover:text-orange-500 transition-colors text-sm sm:text-base"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 mb-8">
          {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
            >
              {social === "facebook" && <FacebookIcon />}
              {social === "twitter" && <TwitterIcon />}
              {social === "instagram" && <InstagramIcon />}
              {social === "linkedin" && <LinkedInIcon />}
            </a>
          ))}
        </div>
      </div>
      <div className="bg-black-700 dark:bg-black-900 p-4">
        <p className="text-gray-300 text-center font-bold">
          © 2023 <span className="text-orange-500">Mumair</span> All Rights
          Reserved , Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
