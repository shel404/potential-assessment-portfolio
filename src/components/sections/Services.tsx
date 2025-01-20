import { FC } from "react";
import { ServiceCardProps } from "../../types";
import SectionHeader from "../common/SectionHeader";

const ServiceCard: FC<ServiceCardProps> = ({ iconSrc, title, description }) => (
  <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
    <div className="mb-6">
      <img src={iconSrc} alt={title} className="w-auto h-16" />
    </div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-black-600">{description}</p>
  </div>
);

const Services: FC = () => {
  const services = [
    {
      iconSrc: "/src/assets/icons/ui-ux-icon.png",
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      iconSrc: "/src/assets/icons/web-design-icon.png",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      iconSrc: "/src/assets/icons/app-design-icon.png",
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      iconSrc: "/src/assets/icons/graphic-design-icon.png",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
