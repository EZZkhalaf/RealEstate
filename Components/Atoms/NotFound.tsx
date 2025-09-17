import React from "react";
import { FailedMessageInterface } from "./FailedMessage";

const NotFound: React.FC<FailedMessageInterface> = ({
  title = "No Results Found",
  paragraph = "We couldn't find any items matching your search.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-700 p-6">
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
      {paragraph && <p className="text-base">{paragraph}</p>}
    </div>
  );
};

export default NotFound;
