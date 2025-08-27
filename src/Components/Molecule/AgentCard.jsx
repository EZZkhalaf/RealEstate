import React from "react";
import FeatureElement from "../Atoms/FeatureElement";
import { Icon } from "@iconify/react";

const ImageAndNameProfile = ({ image, name, locations }) => {
  return (
    <div className="flex flex-col items-center gap-2 ">
      <img
        src={image}
        alt="Profile image"
        className="rounded-full h-24 w-24 mx-auto object-cover"
      />
      <h1 className="text-xl font-semibold text-black">{name}</h1>
      <p className="text-gray-400 text-sm">{locations}</p>
    </div>
  );
};

export const ButtonCustomize = ({
  icon,
  text,
  color,
  hoverColor,
  textColor,
  hoverTextColor,
  navigateTo,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-row w-fit items-center bg-[#${color}] hover:bg-${hoverColor} text-[#${textColor}] hover:text-${hoverTextColor} gap-2 p-2 w-full justify-center rounded-lg border border-gray-300 text-sm duration-300`}
      style={{
        backgroundColor: isHovered ? hoverColor : color,
        color: isHovered ? hoverTextColor : textColor,
      }}
    >
      {icon && <Icon icon={`mdi-light:${icon}`} height="20" width="20" />}
      <p className="font-semibold ">{text}</p>
    </button>
  );
};

const AgentCard = ({ agent }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-8 shadow-2xl rounded-2xl">
      <ImageAndNameProfile
        image={agent.image}
        name={agent.name}
        locations={agent.locations}
      />

      <div className="flex flex-col gap-2 w-full px-3 text-sm">
        <div className="flex justify-between ">
          <p className="text-gray-600">Sales:</p>
          <p className="font-semibold">{agent.sales}</p>
        </div>
        <div className="flex justify-between ">
          <p className="text-gray-600">Experience:</p>
          <p className="font-semibold">{agent.experience}</p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-2">Specialties</p>
      <div className="flex gap-1">
        {agent.specialties.map((s) => (
          <FeatureElement text={s} />
        ))}
      </div>

      <div className="flex justify-around items-center gap-6">
        <ButtonCustomize
          text="Contact"
          icon="email"
          color="#0B3557"
          hoverColor="#0B3557E6"
          textColor="#FFFFFF"
          hoverTextColor="#FFFFFF"
        />
        <ButtonCustomize
          text="Call"
          icon="phone"
          color="#FFFFFF"
          hoverColor="#9CA3AF"
          textColor="#000000"
          hoverTextColor="#FFFFFF"
        />
      </div>
    </div>
  );
};

export default AgentCard;
