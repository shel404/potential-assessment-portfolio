import { FC } from "react";
import { SkillBarProps } from "../../types";

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

export default SkillBar;
