import React from "react";
import FeatureElement from "../Atoms/FeatureElement";
import { Icon } from "@iconify/react";
import ButtonCustomize from "../Atoms/ButtonCustomize";
import {
  AgentCardInterface,
  ImageAndNameProfileProps,
} from "@/Interface/AgentInterface";
import Image from "next/image";
// import { Agent } from "../../Pages/Agents";

// interface AgentCardInterface {
//   agent: Agent;
// }

const ImageAndNameProfile: React.FC<ImageAndNameProfileProps> = ({
  image = "",
  name = "",
  locations = [],
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={image}
        alt="Profile Image"
        className="rounded-full mx-auto h-24 w-24 object-cover"
        width={96}
        height={96}
      />
      <h1 className="text-xl font-semibold text-black">{name}</h1>
      <p className="text-gray-400 text-sm">{locations.join(", ")}</p>
    </div>
  );
};

const AgentCard: React.FC<AgentCardInterface> = ({ agent }) => {
  return (
    <div className="flex flex-col items-center gap-4 lg:p-4 p-2 shadow-2xl rounded-2xl">
      <ImageAndNameProfile
        image={agent.image}
        name={agent.name}
        locations={agent.locations}
      />

      <div className="flex flex-col gap-2 w-full  px-4 text-sm">
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
        {agent.specialties.map((s: string, index: number) => (
          <FeatureElement key={index} text={s} />
        ))}
      </div>

      <div className="flex text-xl flex-col justify-around items-center w-full gap-1 lg:gap-6 lg:flex-row">
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
