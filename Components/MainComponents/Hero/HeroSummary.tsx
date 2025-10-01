import HeroSummaryListing from "../../Molecule/HeroSummary/HeroSummaryListing";
import { SummaryInterface } from "@/Interface/InvestInterface";

export interface HeroSummaryInterface {
  summary?: SummaryInterface[];
  invest?: boolean;
}

const HeroSummary: React.FC<HeroSummaryInterface> = ({
  summary,
  invest = false,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row flex-wrap lg:gap-6 gap-2 items-center justify-between">
      <HeroSummaryListing summary={summary} invest={invest} />
    </div>
  );
};

export default HeroSummary;
