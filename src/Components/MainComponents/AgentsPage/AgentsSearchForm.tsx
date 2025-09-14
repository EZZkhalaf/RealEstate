import React from "react";
import InputGray from "../../Atoms/InputGray";
import ListSelect from "../../Atoms/ListSelect";

interface AgentsSearchFormInterface {
  regions: string[];
}

const AgentsSearchForm: React.FC<AgentsSearchFormInterface> = ({ regions }) => {
  return (
    <form className="flex lg:flex-row flex-col w-full items-center gap-4 px-20">
      <InputGray
        header={"Name"}
        type={"text"}
        placeholder={"Name"}
        additionalCss={"bg-gray-200"}
        additionalInputCss={"bg-gray-200 w-[200px]"}
      />

      <ListSelect
        title={"Region"}
        list={regions}
        width={"w-full"}
        height={"h-full"}
      />
      <ListSelect
        title={"City  "}
        list={regions}
        width={"w-full"}
        height={"h-full"}
      />
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded-lg mt-9 transform-color duration-300">
        Search
      </button>
    </form>
  );
};

export default AgentsSearchForm;
