import React from "react";

const ListSelect = ({ title, list, width }) => {
  return (
    <div className={`${width} flex flex-col gap-3`}>
      {title && <h1 className="font-bold">{title}</h1>}
      <select className={`bg-gray-200 py-3 p-1 rounded relative ${width}`}>
        {list?.map((e, index) => (
          <option key={index} className="bg-white hover:bg-gray-200 p-1 ">
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListSelect;
