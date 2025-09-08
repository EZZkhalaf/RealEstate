import React from "react";

const FeatureElement = ({
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
