import React from "react";

const TermsAndPolicies = () => {
  return (
    <div className="border-t border-gray-400 flex justify-between mt-8 ">
      <p className="text-sm text-gray-400 mt-4">
        © 2024 Premium Real Estate. All rights reserved.
      </p>
      <div className="flex gap-2 mt-4">
        <p className="text-sm text-gray-400">Privacy Policy</p>
        <p className="text-sm text-gray-400">Terms of Service</p>
        <p className="text-sm text-gray-400">Cookie Policy</p>
      </div>
    </div>
  );
};

export default TermsAndPolicies;
