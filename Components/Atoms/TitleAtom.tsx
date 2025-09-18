// import React from "react";

// interface TitleAtomsProps {
//   title: string;
//   textSizeLarge?: string;
//   textSizeDefault?: string;
// }
// const TitleAtom: React.FC<TitleAtomsProps> = ({
//   title,
//   textSizeLarge = "3xl",
//   textSizeDefault = "2xl",
// }) => {
//   return (
//     <h1
//       className={`lg:text-${textSizeLarge} text-${textSizeDefault} font-bold text-black`}
//     >
//       {title}
//     </h1>
//   );
// };

// export default TitleAtom;

import React from "react";

interface TitleAtomProps {
  title: string;
  textSizeLarge?: "2xl" | "3xl" | "4xl";
  textSizeDefault?: "xl" | "2xl" | "3xl";
}

const TitleAtom: React.FC<TitleAtomProps> = ({
  title,
  textSizeLarge = "3xl",
  textSizeDefault = "2xl",
}) => {
  const lgClass = `lg:text-${textSizeLarge}`;
  const defaultClass = `text-${textSizeDefault}`;

  return (
    <h1 className={`${lgClass} ${defaultClass} font-bold text-black`}>
      {title}
    </h1>
  );
};

export default TitleAtom;
