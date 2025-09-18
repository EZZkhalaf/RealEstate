"use client";

import SummaryElementsInsight from "../../Molecule/SummaryElementsInsight";
import ScrollAnimation from "../../../Animation/ScrollAnimation";
import { useEffect, useState } from "react";
import { getStaticPropertyStats } from "@/API/InvestmentApi";

export interface PropertyStatusInterface {
  metric: string;
  value: string;
  change: string;
}

const MarketInsightsSummaryListing = () => {
  const [propertyStats, setPropertyStats] = useState<PropertyStatusInterface[]>(
    []
  );

  const fetchStats = async () => {
    const response = await getStaticPropertyStats();
    setPropertyStats(response);
  };
  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 w-full gap-6 ">
      {propertyStats.map((m, index) => (
        <div key={index} className="shadow-xl rounded-lg bg-white">
          <ScrollAnimation key={index}>
            <SummaryElementsInsight key={index} insight={m} />
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};

export default MarketInsightsSummaryListing;
