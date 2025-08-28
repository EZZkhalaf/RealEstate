import InsightCard from "../../Molecule/InsightCard";

const InsightsListing = ({ insights }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 w-full mt-10 p-3 lg:p-6">
      {insights.map((i, index) => (
        <InsightCard key={index} insight={i} />
      ))}
    </div>
  );
};

export default InsightsListing;
