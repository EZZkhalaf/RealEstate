import React, { Dispatch, SetStateAction } from "react";
import InputGray from "../../../Components/Atoms/InputGray";
import ListSelect from "../../../Components/Atoms/ListSelect";
import { LocationInterface } from "@/Interface/AgentInterface";

const AgentsSearchForm: React.FC<{
  location: LocationInterface[];
  selectedRegion: string;
  selectedCity: string;
  setSelectedRegion: Dispatch<SetStateAction<string>>;
  setSelectedCity: Dispatch<SetStateAction<string>>;
  agentName: string;
  setName: Dispatch<SetStateAction<string>>;
}> = ({
  location,
  agentName,
  setName,
  selectedCity,
  selectedRegion,
  setSelectedCity,
  setSelectedRegion,
}) => {
  const regions: string[] = location?.map((l) => l.name);
  const cities: string[] =
    location?.find((loc) => loc.name === selectedRegion)?.cities || [];
  return (
    <form className="flex lg:flex-row flex-col w-full items-center gap-4 px-1">
      <InputGray
        header={"Name"}
        type={"text"}
        placeholder={"Name"}
        additionalCss={"bg-gray-200"}
        additionalInputCss={"bg-gray-200 w-[200px]"}
        onChange={(e) => setName(e.target.value)}
        value={agentName}
      />

      <ListSelect
        title="Region"
        list={regions}
        value={selectedRegion}
        onChange={(val: any) => {
          setSelectedRegion(val);
          setSelectedCity(""); // reset city when region changes
        }}
        width="w-full"
        height="h-full"
      />

      {/* City */}
      <ListSelect
        title="City"
        list={cities}
        value={selectedCity}
        onChange={(val: any) => setSelectedCity(val)}
        width="w-full"
        height="h-full"
      />
    </form>
  );
};

export default AgentsSearchForm;
