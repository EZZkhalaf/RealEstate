import React from "react";
import { HeroSummaryInterface } from "../../MainComponents/Hero/HeroSummary";
import { SummaryInterface } from "@/Interface/InvestInterface";

// const HeroSummaryListing: React.FC<HeroSummaryInterface> = ({
//   summary = [],
//   invest,
// }) => {
//   console.log("fi", summary);
//   return (
//     <>
//       {summary?.map((element: any, index: number) => (
//         <div
//           key={index}
//           className="flex flex-col items-center justify-center mb-5"
//         >
//           <p className="text-white md:text-3xl text-xl lg:text-3xl text-center font-bold mb-2">
//             {invest ? `${element?.total}` : `${element?.sum}`}
//           </p>
//           <p className="text-white/80 sm:text-sm">{element.name}</p>
//         </div>
//       ))}
//     </>
//   );
// };

const HeroSummaryListing: React.FC<HeroSummaryInterface> = ({
  summary = [],
  invest = false,
}) => {
  console.log("sum : ", invest);
  const normalized = summary.map((element: any) => ({
    value: invest === true ? element?.total : element?.sum,
    name: element?.name,
  }));

  console.log(normalized);
  return (
    <>
      {normalized.map((element, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center mb-5"
        >
          <p className="text-white md:text-3xl text-xl lg:text-3xl text-center font-bold mb-2">
            {element.value}
          </p>
          <p className="text-white/80 sm:text-sm">{element.name}</p>
        </div>
      ))}
    </>
  );
};

export default HeroSummaryListing;
