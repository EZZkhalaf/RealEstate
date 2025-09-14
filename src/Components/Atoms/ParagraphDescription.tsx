import React from "react";

interface paragraphDescriptionInterface {
  description: string;
  textAlignment?: string;
  margin?: boolean;
}

const ParagraphDescription: React.FC<paragraphDescriptionInterface> = ({
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
