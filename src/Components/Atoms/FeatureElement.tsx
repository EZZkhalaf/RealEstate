import React from "react";

interface FeatureElementInterface {
  text: string;
  bg?: string;
  paddingX?: string;
  paddingY?: string;
  textColor?: string;
}
const FeatureElement: React.FC<FeatureElementInterface> = ({
  text,
  bg = "gray-200",
  paddingX = 2,
  paddingY = 0.5,
  textColor = "black",
}) => {
  return (
    <span
      className={`bg-${bg} text-${textColor} font-bold text-xs py-${paddingY} px-${paddingX} rounded-lg  w-fit`}
    >
      {text}
    </span>
  );
};

export default FeatureElement;
