import React from "react";
import { Icon } from "@iconify/react";

const FooterIconsAndLocation: React.FC<{
  title: string;
  icons: string[];
}> = ({ title, icons }) => {
  return (
    <div className="flex flex-col mt-9">
      <p className="text-gray-400 text-sm">{title}</p>
      <div className="flex gap-2 mt-2">
        {icons.map((i: string, index: number) => (
          <Icon
            icon={`mdi:${i}`}
            key={index}
            color="white"
            height="30"
            width="30"
          />
        ))}
      </div>
    </div>
  );
};

export default FooterIconsAndLocation;
