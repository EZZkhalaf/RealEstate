import React from "react";

const ListSelect = ({ list }) => {
  return (
    <div>
      <select className="bg-gray-300 p-1 rounded relative">
        {list.map((e, index) => (
          <option key={index} className="bg-white hover:bg-gray-400">
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListSelect;
