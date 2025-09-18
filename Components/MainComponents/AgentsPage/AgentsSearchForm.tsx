import React, { Dispatch, SetStateAction } from "react";
import InputGray from "../../Atoms/InputGray";
import ListSelect from "../../Atoms/ListSelect";
import { LocationInterface } from "@/app/agents/page";

const AgentsSearchForm: React.FC<{
  location?: LocationInterface[];
  specialties?: string[];
  selectedRegion?: string;
  selectedCity?: string;
  setSelectedRegion?: Dispatch<SetStateAction<string>>;
  setSelectedCity?: Dispatch<SetStateAction<string>>;
  agentName?: string;
  setName?: Dispatch<SetStateAction<string>>;
  selectedSpecialty?: string;
  setSelectedSpecialty?: Dispatch<SetStateAction<string>>;
}> = ({
  location,
  agentName,
  setName,
  specialties,
  selectedCity,
  selectedRegion,
  setSelectedCity,
  setSelectedRegion,
  selectedSpecialty,
  setSelectedSpecialty,
}) => {
  const regions = location?.map((l) => l.region);
  const cities =
    location?.find((loc) => loc.region === selectedRegion)?.cities || [];
  return (
    <form className="flex lg:flex-row flex-col w-full items-center gap-4 px-20">
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
        onChange={(val) => {
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
        onChange={(val) => setSelectedCity(val)}
        width="w-full"
        height="h-full"
      />
    </form>
  );
};

export default AgentsSearchForm;
