import React from "react";
import HeroTitle from "../Hero/HeroTitle";
import ButtonCustomize from "../../Atoms/ButtonCustomize";
import { Icon } from "@iconify/react";

const WebsiteAdvantages = () => {
  return (
    <div className="w-full flex justify-around px-10 text-white mb-6">
      {/* Expert Guidance */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <Icon
            icon="mdi:account-tie" // changed to mdi:
            width="24"
            height="24"
            color="white"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Expert Guidance</h3>
          <p className="text-xs">
            Professional investment advisors with 10+ years experience
          </p>
        </div>
      </div>

      {/* Secure Investments */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <Icon
            icon="mdi:shield-check" // changed to mdi:
            width="24"
            height="24"
            color="white"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Secure Investments</h3>
          <p className="text-xs">
            Thoroughly vetted properties with guaranteed returns
          </p>
        </div>
      </div>

      {/* Proven Results */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <Icon
            icon="mdi:chart-line-variant" // changed to mdi:
            width="24"
            height="24"
            color="white"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Proven Results</h3>
          <p className="text-xs">
            Average 8.5% ROI across our investment portfolio
          </p>
        </div>
      </div>
    </div>
  );
};

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
