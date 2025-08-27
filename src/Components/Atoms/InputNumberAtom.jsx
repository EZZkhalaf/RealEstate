import React, { useState } from "react";

const InputNumberAtom = ({ title, value }) => {
  const [initialValue, setValue] = useState(value);
  return (
    <div className="flex flex-col ">
      <p>{title}</p>
      <input
        type="number"
        value={initialValue}
        onChange={(e) => setValue(e.target.value)}
        className="mt-2 mb-6 bg-gray-300 w-full p-1 rounded-lg"
      />
    </div>
  );
};

export default InputNumberAtom;
