// import React, { useState } from "react";

// const SalaryRangeSelector = ({
//   value1,
//   value2,
//   serValue1,
//   setValue2,
//   list1,
//   list2,
//   title1,
//   title2,
//   default1,
//   default2,
//   noPrice = false,
// }) => {
//   return (
//     <div className="flex  gap-4 items-center mb-3 ">
//       {/* Min Salary */}
//       <div className="flex flex-col ">
//         <label className="text-sm text-gray-600 mb-1 font-bold">{title1}</label>
//         <select
//           value={value1}
//           onChange={(e) => serValue1(e.target.value)}
//           className="border bg-gray-200 border-gray-300 rounded-md px-3 py-2 text-lg text-gray-400 font-semibold w-40 h-10"
//         >
//           <option value="">{default1}</option>
//           {list1.map((op) => (
//             <option key={op} value={op}>
//               {!noPrice && "$"}
//               {op.toLocaleString()}
//             </option>
//           ))}
//         </select>
//       </div>
//       <span className="mt-5">-</span>
//       {/* Max Salary */}
//       <div className={`flex flex-col ${!title2 && "mt-6"}`}>
//         {title2 ? (
//           <label className="text-sm text-gray-600 mb-1 font-bold">
//             {title2}
//           </label>
//         ) : (
//           <div>{"  "}</div>
//         )}
//         <select
//           value={value2}
//           onChange={(e) => setValue2(e.target.value)}
//           className="border bg-gray-200 border-gray-300 rounded-md px-3 py-2 text-lg w-40 h-10 text-gray-400 font-semibold"
//         >
//           <option value="">{default2}</option>
//           {list2.map((op) => (
//             <option
//               key={op}
//               value={op}
//               disabled={value1 && op < value1} // disable invalid values
//             >
//               {!noPrice && "$"}
//               {op.toLocaleString()}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default SalaryRangeSelector;

import React from "react";

interface SalaryRangeSelectorProps {
  value1: number | string;
  value2: number | string;
  serValue1: (val: string) => void;
  setValue2: (val: string) => void;
  list1: (number | string)[];
  list2: (number | string)[];
  title1: string;
  title2?: string;
  default1: string;
  default2: string;
  noPrice?: boolean;
}

const SalaryRangeSelector: React.FC<SalaryRangeSelectorProps> = ({
  value1,
  value2,
  serValue1,
  setValue2,
  list1,
  list2,
  title1,
  title2,
  default1,
  default2,
  noPrice = false,
}) => {
  return (
    <div className="flex gap-4 items-center mb-3">
      {/* Min Salary */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1 font-bold">{title1}</label>
        <select
          value={value1}
          onChange={(e) => serValue1(e.target.value)}
          className="border bg-gray-200 border-gray-300 rounded-md px-3 py-2 text-lg text-gray-400 font-semibold w-40 h-10"
        >
          <option value="">{default1}</option>
          {list1.map((op) => (
            <option key={op} value={op}>
              {!noPrice && "$"}
              {op.toLocaleString()}
            </option>
          ))}
        </select>
      </div>

      <span className="mt-5">-</span>

      {/* Max Salary */}
      <div className={`flex flex-col ${!title2 && "mt-6"}`}>
        {title2 ? (
          <label className="text-sm text-gray-600 mb-1 font-bold">
            {title2}
          </label>
        ) : (
          <div>{"  "}</div>
        )}
        <select
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          className="border bg-gray-200 border-gray-300 rounded-md px-3 py-2 text-lg w-40 h-10 text-gray-400 font-semibold"
        >
          <option value="">{default2}</option>
          {list2.map((op) => (
            <option
              key={op}
              value={op}
              disabled={value1 !== "" && op < value1} // disable invalid values
            >
              {!noPrice && "$"}
              {op.toLocaleString()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SalaryRangeSelector;
