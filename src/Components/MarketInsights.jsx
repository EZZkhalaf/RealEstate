import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import InsightsListing from "./MainComponents/MarketInsights.jsx/InsightsListing";
import MarketInsightsSummaryListing from "./MainComponents/MarketInsights.jsx/MarketInsightsSummaryListing";
import ScrollAnimation from "../Animation/ScrollAnimation";

const MarketInsights = () => {
  const marketReports = [
    {
      type: "Market Report",
      growth: "+8.2%",
      title: "Riyadh Real Estate Market Report Q4 2024",
      description:
        "Property values in Riyadh increased by 8.2% year-over-year, with the highest growth in KAFD.",
      date: "Dec 15, 2024",
      linkText: "Read More",
    },
    {
      type: "Investment Guide",
      growth: "+7.5%",
      title: "Investment Opportunities in Jeddah Waterfront",
      description:
        "New waterfront developments offer promising ROI potential with 7-9% annual returns.",
      date: "Dec 10, 2024",
      linkText: "Read More",
    },
    {
      type: "Analysis",
      growth: "+12.1%",
      title: "Vision 2030 Impact on Real Estate",
      description:
        "Government initiatives continue to drive demand in key economic zones and new cities.",
      date: "Dec 5, 2024",
      linkText: "Read More",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full mt-20 px-2 lg:px-25">
      <ScrollAnimation>
        <TitleAtom title={"Market Insights"} />
      </ScrollAnimation>

      <ScrollAnimation>
        <ParagraphDescription
          description={
            "Stay informed with the latest real estate trends and market analysis"
          }
        />
      </ScrollAnimation>

      <ScrollAnimation>
        <InsightsListing insights={marketReports} />
      </ScrollAnimation>
      <MarketInsightsSummaryListing />
    </div>
  );
};

export default MarketInsights;
