import React from "react";

const ListSelect = ({ title, list, width }) => {
  return (
    <div>
      {title && <p>{title}</p>}
      <select className={`bg-gray-300 p-1 rounded relative ${width}`}>
        {list.map((e, index) => (
          <option key={index} className="bg-white hover:bg-gray-400 p-1 w-full">
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListSelect;
