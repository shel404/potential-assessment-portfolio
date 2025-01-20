import { FC } from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
  alignment?: "left" | "center";
}

const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  description,
  alignment = "center",
}) => {
  return (
    <div
      className={`mb-16 ${
        alignment === "center" ? "text-center" : "text-left"
      }`}
    >
      <h2 className="text-5xl font-semibold mb-6">{title}</h2>
      <p
        className={`text-black ${
          alignment === "center" ? "max-w-3xl mx-auto" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
