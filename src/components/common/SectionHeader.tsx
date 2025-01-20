import { FC } from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
  alignment?: "left" | "center" | "auto";
}

const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  description,
  alignment = "center",
}) => {
  return (
    <div
      className={`mb-16 ${alignment === "center" ? "text-center" : "text-left"}
              ${alignment === "auto" ? "text-center sm:text-left " : ""}
      `}
    >
      <h2 className="text-5xl font-semibold mb-6">{title}</h2>
      <p
        className={`text-black ${
          alignment === "center" ? "max-w-3xl mx-auto" : ""
        }
        ${alignment === "auto" ? "text-center sm:text-left " : ""}
        `}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
