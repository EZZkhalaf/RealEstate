import React, { useState } from "react";

const SalaryRangeSelector = () => {
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  // Generate options (0 → 16M in 500k steps)
  const maxValue = 16000000;
  const step = 5000000;
  const options = [];
  for (let i = 0; i <= maxValue; i += step) {
    options.push(i);
  }

  return (
    <div className="flex  gap-4 items-center mb-3">
      {/* Min Salary */}
      <div className="flex flex-col ">
        <label className="text-sm text-gray-600 mb-1 font-bold">Minimum</label>
        <select
          value={minSalary}
          onChange={(e) => setMinSalary(e.target.value)}
          className="border bg-gray-200 border-gray-300 rounded-md px-3 py-2 text-lg text-gray-400 font-semibold w-40 h-10"
        >
          <option value="">No Min</option>
          {options.map((salary) => (
            <option key={salary} value={salary}>
              ${salary.toLocaleString()}
            </option>
          ))}
        </select>
      </div>
      <span className="mt-5">-</span>
      {/* Max Salary */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1 font-bold">Maximum</label>
        <select
          value={maxSalary}
          onChange={(e) => setMaxSalary(e.target.value)}
          className="border bg-gray-200 border-gray-300 rounded-md px-3 py-2 text-lg w-40 h-10 text-gray-400 font-semibold"
        >
          <option value="">No Max</option>
          {options.map((salary) => (
            <option
              key={salary}
              value={salary}
              disabled={minSalary && salary < minSalary} // disable invalid values
            >
              ${salary.toLocaleString()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SalaryRangeSelector;
