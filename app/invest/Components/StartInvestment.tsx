import React from "react";
import HeroTitle from "../../../Components/MainComponents/Hero/HeroTitle";
import ButtonCustomize from "../../../Components/Atoms/ButtonCustomize";
import { Icon } from "@iconify/react";
import WebsiteAdvantages from "@/Components/MainComponents/StartInvest/WebsiteAdvantages";

const StartInvestment = () => {
  return (
    <div className=" flex flex-col items-center bg-gradient-to-br from-[#0B3557] to-[#2d5f7f]">
      <div className="max-w-5xl  text-center mb-8">
        <HeroTitle
          title1={"Ready to Start Your Investment Journey?"}
          paragraph={
            "Get personalized investment recommendations and connect with our expert team to build your real estate portfolio."
          }
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 lg:px-50 px-20 mt-10">
          <ButtonCustomize
            text="Schedule Consultation"
            icon="calendar-clock"
            color="#16A34A"
            hoverColor="#15803D"
            textColor="#FFFFFF"
            hoverTextColor="#FFFFFF"
          />

          <ButtonCustomize
            text="Call Now: +962123123123"
            icon="phone-in-talk"
            color="#FFFFFF"
            hoverColor="#9CA3AF"
            textColor="#000000"
            hoverTextColor="#FFFFFF"
          />
        </div>
        <WebsiteAdvantages />
      </div>
    </div>
  );
};

export default StartInvestment;
