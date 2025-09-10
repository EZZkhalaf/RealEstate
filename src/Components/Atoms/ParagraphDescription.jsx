import React from "react";

const ParagraphDescription = ({
  description,
  textAlignment = "text-center",
  margin = true,
}) => {
  return (
    <p className={`${margin && "mt-4"} ${textAlignment} text-gray-500`}>
      {description}
    </p>
  );
};

export default ParagraphDescription;
