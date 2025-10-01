import { SummaryInterface } from "@/Interface/InvestInterface";
import { HeroSummaryInterface } from "../../MainComponents/Hero/HeroSummary";

const HeroSummaryListing: React.FC<HeroSummaryInterface> = ({
  summary = [],
  invest = false,
}) => {
  const normalized: SummaryInterface[] = summary.map((element: any) => ({
    value: invest === true ? element?.total : element?.sum,
    name: element?.name,
  }));

  return (
    <>
      {normalized.map((element: SummaryInterface, index: number) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center mb-5"
        >
          <p className="text-white md:text-3xl text-md lg:text-3xl text-center font-bold mb-2">
            {element.value}
          </p>
          <p className="text-white/80 sm:text-xs">{element.name}</p>
        </div>
      ))}
    </>
  );
};

export default HeroSummaryListing;
