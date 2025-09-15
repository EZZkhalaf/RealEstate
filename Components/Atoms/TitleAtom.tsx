import React from "react";

interface TitleAtomsProps {
  title: string;
  textSizeLarge?: string;
  textSizeDefault?: string;
}
const TitleAtom: React.FC<TitleAtomsProps> = ({
  title,
  textSizeLarge = "3xl",
  textSizeDefault = "2xl",
}) => {
  return (
    <h1
      className={`lg:text-${textSizeLarge} text-${textSizeDefault} font-bold text-black`}
    >
      {title}
    </h1>
  );
};

export default TitleAtom;
