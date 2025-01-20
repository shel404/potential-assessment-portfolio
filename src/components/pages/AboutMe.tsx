import { FC } from "react";

interface SkillBarProps {
  label: string;
  percentage: number;
}

const SkillBar: FC<SkillBarProps> = ({ label, percentage }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-lg font-medium">{label}</span>
    </div>
    <div className="h-3 bg-gray-200 rounded-full">
      <div
        className="h-full bg-orange-500 rounded-full relative"
        style={{ width: `${percentage}%` }}
      >
        <div className="absolute -right-2 -top-[0.4rem] w-6 h-6 bg-[#EDECEC] border-2 border-orange-500 rounded-full shadow-md" />
      </div>
    </div>
  </div>
);

const AboutMe: FC = () => {
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
      <div className="flex items-center gap-20">
        <div className="w-1/2">
          <img
            src="/src/assets/images/about-me.png"
            alt="About Me"
            className="w-full rounded-full"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-black mb-10">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          {skills.map((skill) => (
            <SkillBar key={skill.label} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
