import { FC } from "react";

const Navigation: FC = () => {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="/src/assets/images/logo.png"
          alt="Mumair Logo"
          className="h-12"
        />
      </div>

      <div className="flex items-center gap-8">
        {navItems.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-black-black hover:text-orange-500"
          >
            {label}
          </a>
        ))}
        <button className="btn-primary">Download CV</button>
      </div>
    </nav>
  );
};

export default Navigation;
