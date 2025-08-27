import React from "react";
import InsightCard from "../../Molecule/InsightCard";

const InsightsListing = ({ insights }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-10 p-6">
      {insights.map((i) => (
        <InsightCard insight={i} />
      ))}
    </div>
  );
};

export default InsightsListing;
