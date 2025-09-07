import { Icon } from "@iconify/react";
import React, { useState } from "react";
import SalaryRangeSelector from "./SalaryRangeSelector";
import SubmitButton from "../../Atoms/SubmitButton";
import GrayHeader from "../../Atoms/GrayHeader";
import ListSelect from "../../Atoms/ListSelect";
import PriceSelect from "../../Atoms/PriceSelect";

const PaymentButtons = ({ paymentType, setPaymentType }) => {
  return (
    <div className="grid grid-cols-2 mt-2 font-semibold border border-gray-500">
      <button
        onClick={() =>
          setPaymentType(paymentType === "listPrice" ? null : "listPrice")
        }
        className={`${
          paymentType === "listPrice" ? "border border-blue-600" : ""
        } w-full px-4 py-1`}
      >
        List Price
      </button>
      <button
        onClick={() =>
          setPaymentType(
            paymentType === "monthlyPayment" ? null : "monthlyPayment"
          )
        }
        className={` ${
          paymentType === "monthlyPayment" ? "border border-blue-600" : ""
        }  w-full px-4 py-1`}
      >
        Monthly Payment
      </button>
    </div>
  );
};

const Price = () => {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [paymentType, setPaymentType] = useState(null);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const max = 16000000;
  const step = 100000; // 100k step
  const options = [];

  for (let i = 0; i <= max; i += step) {
    options.push(i);
  }

  const [downPayment, setDownPayment] = useState("");
  const [creditScore, setCreditScore] = useState("");

  // Dummy Down Payment options
  const downPaymentOptions = [5000, 10000, 20000, 50000, 100000, 200000];

  // Dummy Credit Score options
  const creditScoreOptions = [300, 400, 500, 600, 700, 800, 850];
  return (
    <div className="flex flex-col gap-2 items-center mt-3 fixed bg-white border border-gray-300 rounded-lg w-[20vw] shadow-2xl scroll-auto">
      <GrayHeader header={"Price Range"} />

      <PaymentButtons
        paymentType={paymentType}
        setPaymentType={setPaymentType}
      />
      <div className="flex text-start text-xl mt-4 text-blue-500 font-semibold gap-2 w-full px-6">
        <Icon icon={`mdi:calculator`} height="25" width="25" />
        Calculate your BuyAbility
      </div>

      <SalaryRangeSelector />

      {paymentType === "monthlyPayment" && (
        <div className="flex flex-col gap-4 px-4 w-full">
          <p className="text-xs text-gray-500">
            Includes estimated principal and interest, mortgage insurance,
            property taxes, home insurance and HOA fees.
          </p>

          <PriceSelect
            title={"Down Payment"}
            onChange={(e) => setDownPayment(e.target.value)}
            list={downPaymentOptions}
            value={downPayment}
          />

          <PriceSelect
            title={"Credit Score"}
            onChange={(e) => setCreditScore(e.target.value)}
            list={creditScoreOptions}
            value={creditScore}
          />
        </div>
      )}
      <div className="w-full px-4 mb-2 mt-5">
        <SubmitButton text={"Apply"} />
      </div>
    </div>
  );
};

export default Price;
