import React from "react";
interface SmallTitleInterface {
  title: string;
  padding?: boolean;
  additionalCss?: string;
}
const SmallTitle: React.FC<SmallTitleInterface> = ({
  title,
  padding = true,
  additionalCss = "text-sm",
}) => {
  return (
    <label
      className={`${additionalCss} text-gray-600 mb-1 font-bold ${
        padding && "px-4"
      } `}
    >
      {title}
    </label>
  );
};

export default SmallTitle;
