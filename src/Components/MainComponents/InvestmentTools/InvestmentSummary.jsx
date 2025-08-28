import React from "react";
import TitleAtom from "../../Atoms/TitleAtom";

const InvestmentSummary = () => {
  const summary = [
    {
      name: "Monthly Payment",
      sum: "$4,490",
    },
    {
      name: "Annual Rent",
      sum: "$96,000",
    },
    {
      name: "ROI",
      sum: "2.81%",
    },
  ];
  return (
    <div className="flex flex-col w-full shadow-2xl p-2 lg:p-8">
      <TitleAtom title={"Investment Summary"} />
      {summary.map((element, index) => (
        <div
          key={index}
          className={`
            ${
              element.name === "ROI"
                ? "bg-[#0B3557] text-white font-bold"
                : "bg-gray-200"
            }
            p-2 flex justify-between mt-3 rounded-lg`}
        >
          <h1 className="">{element.name}</h1>
          <p className=" font-bold">{element.sum}</p>
        </div>
      ))}
    </div>
  );
};

export default InvestmentSummary;
