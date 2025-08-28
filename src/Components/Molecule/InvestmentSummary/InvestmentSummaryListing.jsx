import React from "react";

const InvestmentSummaryListing = ({ summary }) => {
  return (
    <div>
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

export default InvestmentSummaryListing;
