import { Icon } from "@iconify/react";

const Status = ({ isActive }) => {
  return (
    <>
      {isActive ? (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:circle" className="text-green-500 w-3 h-3" />
          <span className="text-sm text-gray-700">Active</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:circle" className="text-gray-400 w-3 h-3" />
          <span className="text-sm text-gray-700">Offline</span>
        </div>
      )}
    </>
  );
};

export default Status;
