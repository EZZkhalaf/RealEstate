import React from "react";
import SmallTitle from "./SmallTitle";

interface PriceSelectedInterface {
  title: string;
  onChange?: any;
  list: any[];
  value?: any;
  HOA?: boolean;
}

const PriceSelect: React.FC<PriceSelectedInterface> = ({
  title,
  onChange,
  list,
  value,
  HOA = false,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full  px-4">
      <SmallTitle title={title} padding={false} />
      <select
        value={value}
        onChange={onChange}
        className="border bg-gray-200  border-gray-400 rounded-md  py-2 text-md w-full h-10 text-gray-500 font-semibold "
      >
        <option value="">Select {title}</option>
        {list?.map((l) => (
          <option key={l} value={l}>
            {HOA ? `${l}/month` : l.toLocaleString()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceSelect;
