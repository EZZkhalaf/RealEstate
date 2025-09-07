import React from "react";

const PriceSelect = ({ title, onChange, list, value, HOA = false }) => {
  return (
    <div className="flex flex-col gap-1 w-full px-4 ">
      <p className="text-md text-gray-400">{title}</p>
      <select
        value={value}
        onChange={onChange}
        className="border bg-gray-200 border-gray-300 rounded-md px-3 py-2 text-md w-full h-10 text-gray-400 font-semibold "
      >
        <option value="">Select {title}</option>
        {list?.map((l) => (
          <option key={l} value={l}>
            {HOA ? (
              <p>
                {"$"}${l}/month
              </p>
            ) : (
              l.toLocaleString()
            )}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceSelect;
