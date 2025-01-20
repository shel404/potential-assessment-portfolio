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
    <footer className="bg-gray-50 pt-20 ">
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <img
            src="/src/assets/images/logo.png"
            alt="Mumair"
            className="h-12"
          />
        </div>

        {/* Navigation */}
        <nav className="mb-8">
          <ul className="flex gap-8">
            {navigation.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-black hover:text-orange-500 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 mb-8">
          <a
            href="#"
            className="text-black hover:text-orange-500 transition-colors"
          >
            <FacebookIcon />
          </a>
          <a
            href="#"
            className="text-black hover:text-orange-500 transition-colors"
          >
            <TwitterIcon />
          </a>
          <a
            href="#"
            className="text-black hover:text-orange-500 transition-colors"
          >
            <InstagramIcon />
          </a>
          <a
            href="#"
            className="text-black hover:text-orange-500 transition-colors"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="bg-black-700 p-4">
        <p className="text-gray-300 text-center font-bold">
          © 2023 <span className="text-orange-500">Mumair</span> All Rights
          Reserved , Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
