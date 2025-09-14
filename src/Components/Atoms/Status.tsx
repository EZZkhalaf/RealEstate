import { Icon } from "@iconify/react";
import React from "react";

interface StatusInterface {
  isActive: boolean;
  activeText?: string;
  offlineText?: string;
}

const Status: React.FC<StatusInterface> = ({
  isActive,
  activeText = "Active",
  offlineText = "Offline",
}) => {
  return (
    <>
      {isActive ? (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:circle" className="text-green-500 w-3 h-3" />
          <span className="text-sm text-gray-700">{activeText}</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:circle" className="text-gray-400 w-3 h-3" />
          <span className="text-sm text-gray-700">{offlineText}</span>
        </div>
      )}
    </>
  );
};

export default Status;
