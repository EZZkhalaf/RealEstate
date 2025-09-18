"use client";
import React, { useEffect } from "react";

// interface ListSelectInterface {
//   title?: string;
//   list?: string[];
//   width?: string;
//   height?: string;
// }
const ListSelect: React.FC<{
  title?: string;
  list?: string[] | number[];
  width?: string;
  height?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  years: boolean;
}> = ({ title, list, width, height, value, onChange, years = false }) => {
  return (
    <div className={`${width} flex flex-col gap-3`}>
      {title && <h1 className="font-bold">{title}</h1>}
      <select
        value={value}
        onChange={(e) =>
          onChange?.(years ? Number(e.target.value) : e.target.value)
        }
        className={`bg-gray-200 py-3 p-1 rounded relative ${width} `}
      >
        {list?.map((e, index) => (
          <option key={index} className="bg-white hover:bg-gray-200 p-1 ">
            {e} {years && "years"}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListSelect;
