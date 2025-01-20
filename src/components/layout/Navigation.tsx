import { FC, useState, useEffect } from "react";

const Navigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home">
            <img
              src="/src/assets/images/logo.png"
              alt="Mumair Logo"
              className="h-10 sm:h-12 block dark:hidden"
            />
            <img
              src="/src/assets/images/logo-dark.png"
              alt="Mumair Logo"
              className="h-10 sm:h-12 hidden dark:block"
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden text-black dark:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden xl:flex items-center gap-8">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
            >
              {label}
            </a>
          ))}
          <button className="btn-primary">Download CV</button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`xl:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white dark:bg-black-800 shadow-lg`}
      >
        <div className="px-4 py-2 space-y-1">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
            >
              {label}
            </a>
          ))}
          <button className="btn-primary w-full my-2">Download CV</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
