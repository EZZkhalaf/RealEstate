import React from "react";
import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";

import GrayLine from "./Atoms/GrayLine";

interface InvestmentToolsInterface {
  title?: string;
  description?: string;
  children: React.ReactNode;
}
const InvestmentTools: React.FC<InvestmentToolsInterface> = ({
  title = "Investment Tools",
  description = "Calculate your returns and make informed investment decisions",
  children,
}) => {
  return (
    <div className="grid grid-cols-1  w-full mt-20  lg:px-50 md:px-20 px-5">
      <div className="flex flex-col items-center">
        <TitleAtom title={title} textSizeLarge="3xl" textSizeDefault="3xl" />
        <ParagraphDescription description={description} />
        <GrayLine />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default InvestmentTools;
