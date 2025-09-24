"use client";
import { ListSelectInterface } from "@/Interface/ServicesInterface";

const ListSelect: React.FC<ListSelectInterface> = ({
  title,
  list,
  width,
  height,
  value,
  onChange,
  years = false,
}) => {
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
        <option className="bg-white hover:bg-gray-200 p-1 ">All Regions</option>
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
