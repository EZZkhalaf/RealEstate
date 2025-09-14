import React from "react";
interface SmallTitleInterface {
  title: string;
  padding?: boolean;
}
const SmallTitle: React.FC<SmallTitleInterface> = ({
  title,
  padding = true,
}) => {
  return (
    <label
      className={`text-sm text-gray-600 mb-1 font-bold ${padding && "px-4"}`}
    >
      {title}
    </label>
  );
};

export default SmallTitle;
