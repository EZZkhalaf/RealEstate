import { Icon } from "@iconify/react";
import React, { useState } from "react";
import SalaryRangeSelector from "./SalaryRangeSelector";
import SubmitButton from "../../Atoms/SubmitButton";
import GrayHeader from "../../Atoms/GrayHeader";
import ListSelect from "../../Atoms/ListSelect";
import PriceSelect from "../../Atoms/PriceSelect";

interface PriceProps {
  value?: {
    min: any;
    max: any;
    paymentType?: string | null;
    downPayment?: number;
    creditScore?: number;
  };
  onChange?: (value: {
    min: any;
    max: any;
    paymentType?: string | null;
    downPayment?: number;
    creditScore?: number;
  }) => void;
}

const PaymentButtons: React.FC<{
  paymentType: any;
  setPaymentType: (paymentType: any) => void;
}> = ({ paymentType, setPaymentType }) => {
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
const Price: React.FC<PriceProps> = ({ value, onChange }) => {
  const max = 16000000;
  const step = 100000;
  const options = Array.from({ length: max / step + 1 }, (_, i) => i * step);

  const downPaymentOptions = [5000, 10000, 20000, 50000, 100000, 200000];
  const creditScoreOptions = [300, 400, 500, 600, 700, 800, 850];

  const handlePaymentTypeChange = (type: string | null) => {
    onChange({ ...value, paymentType: type });
  };

  return (
    <div className="flex flex-col gap-2 items-center mt-3 fixed bg-white border border-gray-300 rounded-lg w-[500px] shadow-2xl max-h-[60vh] overflow-y-auto">
      <GrayHeader header={"Price Range"} />

      <PaymentButtons
        paymentType={value?.paymentType || null}
        setPaymentType={handlePaymentTypeChange}
      />

      <div className="flex text-start text-xl mt-4 text-blue-500 font-semibold gap-2 w-full px-6">
        <Icon icon={`mdi:calculator`} height="25" width="25" />
        Calculate your BuyAbility
      </div>

      <SalaryRangeSelector
        value1={value?.min}
        value2={value?.max}
        serValue1={(min) => onChange({ ...value, min })}
        setValue2={(max) => onChange({ ...value, max })}
        list1={options}
        list2={options}
        title1={"Minimum"}
        title2={"Maximum"}
        default1={"Any"}
        default2={"Any"}
      />

      {value?.paymentType === "monthlyPayment" && (
        <div className="flex flex-col gap-4 px-4 w-full">
          <p className="text-xs text-gray-500">
            Includes estimated principal and interest, mortgage insurance,
            property taxes, home insurance and HOA fees.
          </p>

          <PriceSelect
            title={"Down Payment"}
            onChange={(e) =>
              onChange({ ...value, downPayment: +e.target.value })
            }
            list={downPaymentOptions}
            value={value.downPayment || ""}
          />

          <PriceSelect
            title={"Credit Score"}
            onChange={(e) =>
              onChange({ ...value, creditScore: +e.target.value })
            }
            list={creditScoreOptions}
            value={value.creditScore || ""}
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
