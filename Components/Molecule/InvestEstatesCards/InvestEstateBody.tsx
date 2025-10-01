import React from "react";

import {
  EstateInterface,
  InvestEstateInterface,
} from "@/Interface/EstateInterface";
import FeatureElement from "@/Components/Atoms/FeatureElement";
import ButtonCustomize from "@/Components/Atoms/ButtonCustomize";
import CardTitle from "@/Components/Atoms/CardTitle";
import CardLocation from "@/Components/Atoms/CardLocation";
import PercentageBar from "@/Components/Atoms/PercentageBar";

interface CardBodyInterface {
  estate: InvestEstateInterface;
  viewDetailsClick?: (e: any) => void;
}

const CardBodyButtons = ({}) => {
  return (
    <div className="flex text-2xl  gap-2 w-full pt-3">
      <ButtonCustomize
        text="View Details"
        // onClick={viewDetailsClick}
        color="#D1D5DB"
        hoverColor="#0B3557E6"
        textColor="#000000"
        hoverTextColor="#FFFFFF"
      />

      <ButtonCustomize
        text="Contact Agent"
        color="#0B3557"
        hoverColor="#0B355780"
        textColor="#FFFFFF"
        hoverTextColor="#FFFFFF"
      />
    </div>
  );
};

const FundProgress: React.FC<{
  fund_amount: number;
  fund_percentage: number;
}> = ({ fund_amount, fund_percentage }) => {
  return (
    <div className="flex flex-col gap-1 px-3 mt-5">
      <div className="flex items-center justify-between ">
        <div className="flex flex-row  gap-1 ">
          <p className="text-green-500 ">AED</p>
          <p className="text-green-500 ">{fund_amount.toLocaleString()}</p>
        </div>
        <div className="text-gray-500    text-sm">
          {(fund_percentage > 100
            ? 100
            : fund_percentage < 0
            ? 0
            : fund_percentage
          ).toLocaleString()}
          % funded
        </div>
      </div>
      <PercentageBar fund_percentage={fund_percentage || 0} />
    </div>
  );
};

const InvestEstateBody: React.FC<CardBodyInterface> = ({
  estate,
  viewDetailsClick,
}) => {
  return (
    <div>
      <div className="flex flex-col bg-gray-100  px-4 py-6 rounded-lg transform transition-transform duration-300 ">
        <CardTitle title={estate.title} />
        <CardLocation
          isSmall="text-sm"
          location={
            estate?.estate_city?.name + ", " + estate?.location?.area?.name ||
            "location"
          }
        />

        <FundProgress
          fund_amount={Number(estate?.fund_amount)}
          fund_percentage={Number(estate?.fund_percentage)}
        />

        <div className="bg-gray-200 p-2 flex flex-col gap-2 rounded-lg mt-5">
          <div className="flex justify-between ">
            <p className="text-gray-400"> 5 year total return</p>
            <p className="font-bold">{estate?.return_in_5_years}%</p>
          </div>
          <div className="flex justify-between ">
            <p className="text-gray-400">yearly investment return</p>
            <p className="font-bold">{estate?.yearly_investment}%</p>
          </div>
          <div className="flex justify-between ">
            <p className="text-gray-400"> project net yeild</p>
            <p className="font-bold">{estate?.net_yield}%</p>
          </div>
        </div>

        <CardBodyButtons />
      </div>
    </div>
  );
};

export default InvestEstateBody;
