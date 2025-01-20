import { FC } from "react";
import { ServiceCardProps } from "../../types";
import SectionHeader from "../common/SectionHeader";

const ServiceCard: FC<ServiceCardProps> = ({ iconSrc, title, description }) => (
  <div className="relative bg-gray-50 p-6 sm:p-8 rounded-lg hover:shadow-lg dark:hover:shadow-orange-500/20 overflow-hidden transition-all duration-300 group">
    <div className="mb-6">
      <img src={iconSrc} alt={title} className="w-auto h-12 sm:h-16" />
    </div>
    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-black-900 ">
      {title}
    </h3>
    <p className="text-black-600 text-sm sm:text-base">{description}</p>
    <div className="opacity-0 dark:group-hover:opacity-100 absolute h-[6px] w-full bg-orange-500 bottom-0 left-0 transition-opacity duration-500"></div>
  </div>
);

const Services: FC = () => {
  const services = [
    {
      iconSrc: "/icons/ui-ux-icon.png",
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      iconSrc: "/icons/web-design-icon.png",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      iconSrc: "/icons/app-design-icon.png",
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      iconSrc: "/icons/graphic-design-icon.png",
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
  ];

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <SectionHeader
        title="Services"
        description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
