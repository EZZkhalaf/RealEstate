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
    <div className="w-full flex flex-row gap-10 lg:gap-6 items-center justify-between">
      <HeroSummaryListing summary={summary} invest={invest} />
    </div>
  );
};

export default HeroSummary;
