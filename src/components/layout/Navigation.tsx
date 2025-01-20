import { FC, useState, useEffect } from "react";

const Navigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200
        ${
          isScrolled
            ? "backdrop-blur-md bg-white/70 dark:bg-black-800/70 shadow-lg"
            : "bg-white dark:bg-black-800"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/src/assets/images/logo.png"
            alt="Mumair Logo"
            className="h-12 block dark:hidden"
          />
          <img
            src="/src/assets/images/logo-dark.png"
            alt="Mumair Logo"
            className="h-12 hidden dark:block"
          />
        </div>

        <div className="flex items-center gap-8">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-black dark:text-white hover:text-orange-500 transition-colors"
            >
              {label}
            </a>
          ))}
          <button className="btn-primary">Download CV</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
