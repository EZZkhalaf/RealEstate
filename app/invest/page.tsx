import Hero from "@/Components/Hero";
import ScrollAnimation from "@/Animation/ScrollAnimation";
import ButtonCustomize from "@/Components/Atoms/ButtonCustomize";
import HeroSummary from "@/Components/MainComponents/Hero/HeroSummary";
import InvestmentOpportunities from "@/Components/MainComponents/InvestPage/InvestmentOpportunities";

import InvestmentTools from "@/Components/InvestmentTools";
import InvestmentAnalysis from "@/Components/MainComponents/InvestPage/InvestmentAnalysis";
import FinancialBreakDown from "@/Components/MainComponents/InvestPage/FinancialBreakDown";
import InvestmentStrategies from "@/Components/MainComponents/InvestPage/InvestmentStrategies";
import MarketAnalysis from "@/Components/MainComponents/InvestPage/MarketAnalysis";
import StartInvestment from "@/Components/MainComponents/InvestPage/StartInvestment";
import Footer from "@/Components/Footer";
import { SummaryInterface } from "@/Interface/InvestInterface";
import EstatesSection from "@/Components/MainComponents/InvestPage/EstatesSection";

export default function Invest() {
  const summary: SummaryInterface[] = [
    {
      total: "₹2.8B+",
      name: "Total Investments",
    },
    {
      total: "8.5%",
      name: "Average ROI",
    },
    {
      total: "500+",
      name: "Investment Properties",
    },
    {
      total: "1,200+",
      name: "SummaryInterface Investors",
    },
  ];
  // const [estates, setEstates] = useState<any[]>([]);
  // const fetchEstates = async () => {
  //   const data: any = await getStaticEstates();

  //   const parsed = data?.map((estate: any) => ({
  //     ...estate,
  //     // only parse strings if they are stored as raw JSON strings
  //     features: Array.isArray(estate.features) ? estate.features : [],
  //     special_props: Array.isArray(estate.special_props)
  //       ? estate.special_props
  //       : [],
  //     actions: Array.isArray(estate.actions) ? estate.actions : [],
  //     stats: estate.stats || {},
  //     listing_info: estate.listing_info || {},
  //     image: Array.isArray(estate.image)
  //       ? estate.image
  //       : estate.image
  //       ? [estate.image]
  //       : [],
  //   }));

  //   setEstates(parsed);
  // };
  // useEffect(() => {
  //   fetchEstates();
  // }, []);
  return (
    <div className="w-full">
      <Hero
        heroTitle1={"Build Wealth Through"}
        heroTitle2={"Real Estate Investment"}
        heroParagraph={
          "Discover premium investment opportunities in Saudi Arabia's fastest-growing real estate markets"
        }
        // priceHeroExist={false}
        minHeight="max-h-fit"
      >
        <ScrollAnimation>
          <div className="flex flex-col items-center justify-center h-full w-full gap-10 text-center">
            <div className="flex md:flex-row flex-col lg:flex-row gap-3 w-full px-4">
              <ButtonCustomize
                text="Find Investment Property"
                // icon="home"
                color="#22C55E" // green-500
                hoverColor="#16A34A" // green-600
                textColor="#FFFFFF"
                hoverTextColor="#FFFFFF"
              />

              <ButtonCustomize
                text="Calculate Returns"
                // icon="calculator-variant"
                color="#FFFFFF"
                hoverColor="#9CA3AF"
                textColor="#000000"
                hoverTextColor="#FFFFFF"
              />
            </div>
            <HeroSummary summary={summary} />
          </div>
        </ScrollAnimation>
      </Hero>

      <InvestmentOpportunities />

      {/* <div className="flex flex-col items-center w-full mt-8 ">
        <TitleAtom title={"Investment Properties"} />
        <ParagraphDescription
          description={
            "Choose from various investment property and choose the risl  for it "
          }
        />
        <GrayLine />
      </div>

      <EstateCards
        estates={estates}
        buttonTitle="View All Investment Properties"
      /> */}
      <EstatesSection />

      <InvestmentTools
        title="Investment Calculator"
        description="Calculate detailed returns, cash flow, and investment metrics for any property"
      >
        <div className="grid grid-cols-1 gap-2 ">
          <InvestmentAnalysis />
          <FinancialBreakDown />
          <ButtonCustomize
            text="Contact"
            icon="email"
            color="#0B3557"
            hoverColor="#0B3557E6"
            textColor="#FFFFFF"
            hoverTextColor="#FFFFFF"
          />
          <ButtonCustomize
            text="Call"
            icon="phone"
            color="#FFFFFF"
            hoverColor="#9CA3AF"
            textColor="#000000"
            hoverTextColor="#FFFFFF"
          />
        </div>
      </InvestmentTools>
      <InvestmentStrategies />
      <MarketAnalysis />
      <StartInvestment />
      <Footer />
    </div>
  );
}
