import React from "react";
import TitleAtom from "../Components/Atoms/TitleAtom";
import ParagraphDescription from "../Components/Atoms/ParagraphDescription";
import Introduction from "../Components/MainComponents/InvestPage/Introduction";
import TypesOfEstates from "../Components/MainComponents/InvestPage/TypesOfEstates";
import HowItWork from "../Components/MainComponents/InvestPage/HowItWork";
import InvestRisks from "../Components/MainComponents/InvestPage/InvestRisks";
import Footer from "../Components/Footer";
import ViewButtonAtom from "../Components/Atoms/ViewButtonAtom";
import { useNavigate } from "react-router-dom";

const Invest = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="mt-20 px-10 bg-gray-100">
        <div className="py-3">
          <TitleAtom
            title={"Investment in Estates"}
            textSizeDefault="text-2xl"
          />
          <ParagraphDescription
            description={
              "Investing in estates allows you to generate passive income and build wealth through rental returns and property appreciation."
            }
            textAlignment=" "
          />
        </div>
        <Introduction />

        <TypesOfEstates />

        <HowItWork />

        <InvestRisks />

        <div className="mt-8 flex w-full justify-center mb-8">
          <ViewButtonAtom
            // onClick={() => navigate("/agents")}
            title={"Invest Now"}
            navigateTo={"any url"}
            color={"#FFFFFF"}
            hoverColor={"#0B3557"}
            textColor={"#0B3557"}
            hoverTextColor={"#FFFFFF"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Invest;
