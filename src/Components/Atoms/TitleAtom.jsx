import React from "react";

const TitleAtom = ({
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
