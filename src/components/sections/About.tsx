import { FC } from "react";
import SkillBar from "../common/SkillBar";
import SectionHeader from "../common/SectionHeader";

const About: FC = () => {
  const skills = [
    { label: "UX", percentage: 90 },
    { label: "Website Design", percentage: 85 },
    { label: "App Design", percentage: 95 },
    { label: "Graphic Design", percentage: 88 },
  ];

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
        <div className="w-full lg:w-1/2">
          <img
            src="/images/about-me.png"
            alt="About Me"
            className="w-full max-w-[400px] mx-auto lg:max-w-none rounded-full"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <SectionHeader
            title="About Me"
            description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra"
            alignment="auto"
          />
          {skills.map((skill) => (
            <SkillBar key={skill.label} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
