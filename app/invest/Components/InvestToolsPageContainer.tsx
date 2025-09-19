import ScrollAnimation from "@/Animation/ScrollAnimation";
import React, { useMemo, useState } from "react";
import ROICalculator from "../../../Components/MainComponents/InvestmentTools/ROICalculator";
import InvestmentAnalysis from "../../../Components/MainComponents/InvestPage/InvestmentAnalysis";
import FinancialBreakDown from "../../../Components/MainComponents/InvestPage/FinancialBreakDown";
import ButtonCustomize from "@/Components/Atoms/ButtonCustomize";

const InvestToolsPageContainer = () => {
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
  const operatingExpenses = propertyValue * 0.01; // example assumption
  const NOI = annualRent - operatingExpenses;

  const annualDebtService = monthlyPayment * 12;
  const annualCashFlow = NOI - annualDebtService;

  const capRate = (NOI / propertyValue) * 100;

  const cashInvested = propertyValue - loanAmount; // your own cash in the deal
  const cashOnCashReturn = (annualCashFlow / cashInvested) * 100;
  const grossAnnualRent = monthlyRent * 12;

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
      <div className="grid grid-cols-1 gap-2 ">
        <InvestmentAnalysis
          annualCashFlow={annualCashFlow}
          NOI={NOI}
          COC={cashOnCashReturn}
          capRate={capRate}
        />
        <FinancialBreakDown
          grossAnnualRent={grossAnnualRent}
          totalExpenses={totalExpenses}
          totalExpensest={totalExpenses}
          netCashFlow={netCashFlow}
        />

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
    </div>
  );
};

export default InvestToolsPageContainer;
