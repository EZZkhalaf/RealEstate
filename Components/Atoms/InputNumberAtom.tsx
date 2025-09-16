"use client";
import React, { useState } from "react";

interface InputNumberAtomInterface {
  title: string;
  value: number;
}

const InputNumberAtom: React.FC<InputNumberAtomInterface> = ({
  title,
  value,
}) => {
  const [initialValue, setValue] = useState<number>(value);
  return (
    <div className="flex flex-col ">
      <p>{title}</p>
      <input
        type="number"
        value={initialValue}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-2 mb-6 bg-gray-300 w-full p-1 rounded-lg"
      />
    </div>
  );
};

export default InputNumberAtom;
