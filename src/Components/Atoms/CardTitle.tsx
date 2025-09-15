import React from "react";

interface CardTitleInterface {
  title: string;
}
const CardTitle: React.FC<CardTitleInterface> = ({ title }) => {
  return (
    <h1 className="text-gray-900 font-semibold mb-2 text-md  lg:text-xl ">
      {title}
    </h1>
  );
};

export default CardTitle;
