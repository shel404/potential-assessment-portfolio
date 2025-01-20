import { FC, useState } from "react";
import SectionHeader from "../common/SectionHeader";

type ProjectCategory =
  | "All"
  | "UI/UX"
  | "Web Design"
  | "App Design"
  | "Graphic Design";

interface Project {
  image: string;
  category: ProjectCategory;
  title: string;
  type: string;
}

const Projects: FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const categories: ProjectCategory[] = [
    "All",
    "UI/UX",
    "Web Design",
    "App Design",
    "Graphic Design",
  ];

  const projects: Project[] = [
    {
      image: "/src/assets/images/projects/aircalling.png",
      category: "Web Design",
      title: "AirCalling Landing Page Design",
      type: "Web Design",
    },
    {
      image: "/src/assets/images/projects/business.png",
      category: "Web Design",
      title: "Business Landing Page Design",
      type: "Web Design",
    },
    {
      image: "/src/assets/images/projects/ecom.png",
      category: "Web Design",
      title: "Ecom Web Page Design",
      type: "Web Design",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <SectionHeader
        title="My Projects"
        description="Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
      />

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 sm:px-6 py-2 rounded-md transition-colors text-sm sm:text-base ${
              activeCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-100  text-black-950  hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.title} className="group">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="text-orange-500 font-medium block mb-2">
              {project.type}
            </span>
            <h3 className="text-2xl  text-black">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
