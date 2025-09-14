import { MarketReportInterface } from "../../MarketInsights";
import InsightCard from "../../Molecule/InsightCard";

interface InsightListingInterface {
  insights: MarketReportInterface[];
}
const InsightsListing: React.FC<InsightListingInterface> = ({ insights }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 w-full mt-10 p-3 lg:p-6">
      {insights.map((i: MarketReportInterface, index: number) => (
        <InsightCard key={index} insight={i} />
      ))}
    </div>
  );
};

export default InsightsListing;
