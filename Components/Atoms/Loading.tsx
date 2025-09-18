import React from "react";
import { OrbitProgress } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="max-w-md min-h-full mx-auto p-8 bg-gradient-to-br space-y-6 flex justify-center items-center mt-10">
      <OrbitProgress color="#32cd32" size="medium" text="" textColor="" />
    </div>
  );
};

export default Loading;
