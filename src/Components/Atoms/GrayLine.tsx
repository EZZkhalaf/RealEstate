import React from "react";

interface GrayLineInterface {
  width?: string;
}
const GrayLine: React.FC<GrayLineInterface> = ({ width }) => {
  return <div className={`bg-gray-300 h-0.5 mt-5 mb-5 px-20 ${width}`}></div>;
};

export default GrayLine;
