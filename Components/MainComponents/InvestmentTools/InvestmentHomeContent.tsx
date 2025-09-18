"use client";
import ScrollAnimation from "@/Animation/ScrollAnimation";
import React, { useEffect, useMemo, useState } from "react";
import ROICalculator from "./ROICalculator";
import InvestmentSummary from "./InvestmentSummary";
import MarketInsightsSummary from "./MarketInsightsSummary";
import ViewButtonAtom from "@/Components/Atoms/ViewButtonAtom";
import { SummaryROIInterface } from "@/Interface/InvestInterface";

const InvestmentHomeContent = () => {
  const [propertyValue, setPropertyValue] = useState<number>(15000);
  const [monthlyRent, setMonthlyRent] = useState<number>(800);
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [intrestRate, setIntrestRate] = useState<number>(3.5);
  const [loanTerms, setLoanTerms] = useState<number>(15);

  const monthlyPayment = useMemo(() => {
    const r = intrestRate / 100 / 12;
    const n = loanTerms * 12;
    if (r === 0) return loanAmount / n;
    return (loanAmount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
  }, [loanAmount, intrestRate, loanTerms]);

  const annualRent = monthlyRent * 12;
  const roiPercentage =
    ((annualRent - monthlyPayment * 12) / propertyValue) * 100;

  const grossAnnualRent = monthlyRent * 12;
  const operatingExpenses = propertyValue * 0.01; // e.g. 1% of property value per year
  const totalExpenses = monthlyPayment * 12 + operatingExpenses;

  const netCashFlow = grossAnnualRent - totalExpenses;

  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 w-full p-8 px-3 lg:px-20 gap-10">
      <ScrollAnimation>
        <ROICalculator
          loanTerms={loanTerms}
          setLoanTerms={setLoanTerms}
          propertyValue={propertyValue}
          setPropertyValue={setPropertyValue}
          monthlyRent={monthlyRent}
          setMonthlyRent={setMonthlyRent}
          loanAmount={loanAmount}
          setLoanAmount={setLoanAmount}
          intrestRate={intrestRate}
          setIntrestRate={setIntrestRate}
        />
      </ScrollAnimation>
      <div className="grid grid-cols-1">
        <ScrollAnimation>
          <InvestmentSummary
            monthlyPayment={monthlyPayment}
            annualRent={annualRent}
            ROI={roiPercentage}
          />
        </ScrollAnimation>

        <ScrollAnimation>
          <MarketInsightsSummary />
        </ScrollAnimation>

        <ScrollAnimation>
          <ViewButtonAtom
            title={"Get Investment Consultation "}
            color={"#0B3557"}
            hoverColor={"#5A7792"}
            textColor={"#FFFFFF"}
          />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default InvestmentHomeContent;
