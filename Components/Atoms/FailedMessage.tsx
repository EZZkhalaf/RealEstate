import React from "react";

export interface FailedMessageInterface {
  title?: string;
  paragraph?: string;
}

const FailedMessage: React.FC<FailedMessageInterface> = ({
  title = "Error",
  paragraph = "Something went wrong. Please try again.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-red-600 p-6">
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
      {paragraph && <p className="text-base">{paragraph}</p>}
    </div>
  );
};

export default FailedMessage;
