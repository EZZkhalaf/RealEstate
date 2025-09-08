import React, { useState } from "react";

const ExpandableParagraph = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 180;

  const isLong = text.length > limit;
  const displayText = expanded
    ? text
    : text.slice(0, limit) + (isLong ? "..." : "");
  return (
    <div className="mt-5">
      <p className="text-md text-gray-700">{displayText}</p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-700 font-semibold hover:underline mt-2"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default ExpandableParagraph;
