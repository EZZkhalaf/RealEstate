import SummaryElementsInsight from "../../Molecule/SummaryElementsInsight";
import ScrollAnimation from "../../../Animation/ScrollAnimation";

export interface PropertyStatusInterface {
  metric: string;
  value: string;
  change: string;
}

const MarketInsightsSummaryListing = () => {
  const propertyStats: PropertyStatusInterface[] = [
    {
      metric: "Avg. Property Value",
      value: "₹2.8M",
      change: "+8.2%",
    },
    {
      metric: "Rental Yield",
      value: "6.5%",
      change: "+0.3%",
    },
    {
      metric: "Market Transactions",
      value: "1,247",
      change: "+15.4%",
    },
    {
      metric: "Days on Market",
      value: "32",
      change: "-5 days",
    },
  ];

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
