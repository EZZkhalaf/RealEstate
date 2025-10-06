import React from "react";
import HeroTitle from "../../../Components/MainComponents/Hero/HeroTitle";
import ButtonCustomize from "../../../Components/Atoms/ButtonCustomize";
import WebsiteAdvantages from "@/Components/MainComponents/StartInvest/WebsiteAdvantages";

interface StartInvestmentInterface {
  title: string;
  paragraph: string;
  button_1_placeholder: string;
  button_2_placeholder: string;
  website_advantages: any;
}
const StartInvestment: React.FC<{
  startInvestData: StartInvestmentInterface;
}> = ({ startInvestData }) => {
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-br from-[#0B3557] to-[#2d5f7f]">
      <div className="max-w-7xl  text-center mb-8">
        <HeroTitle
          title1={startInvestData?.title || "Ready To Start Investing ?"}
          paragraph={
            startInvestData?.paragraph ||
            "start your journy in the investment here !!"
          }
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 lg:px-50 px-20 mt-10">
          <ButtonCustomize
            text={startInvestData?.button_1_placeholder}
            icon="calendar-clock"
            color="#16A34A"
            hoverColor="#15803D"
            textColor="#FFFFFF"
            hoverTextColor="#FFFFFF"
          />

          <ButtonCustomize
            text={startInvestData?.button_2_placeholder}
            icon="phone-in-talk"
            color="#FFFFFF"
            hoverColor="#9CA3AF"
            textColor="#000000"
            hoverTextColor="#FFFFFF"
          />
        </div>
        <WebsiteAdvantages websiteInfo={startInvestData?.website_advantages} />
      </div>
    </div>
  );
};

export default StartInvestment;
