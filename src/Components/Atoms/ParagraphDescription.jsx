import React from "react";

const ParagraphDescription = ({
  description,
  textAlignment = "text-center",
}) => {
  return <p className={`mt-4 ${textAlignment} text-gray-500`}>{description}</p>;
};

export default ParagraphDescription;
