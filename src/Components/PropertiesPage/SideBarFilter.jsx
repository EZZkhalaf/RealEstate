import React, { useState } from "react";
import TitleAtom from "../Atoms/TitleAtom";
import ButtonCustomize from "../Atoms/ButtonCustomize";
import FeatureElement from "../Atoms/FeatureElement";

const SideBarFilter = () => {
  const features = ["1 RK", "1 BHK", "2 BHK", "3 BHK", "+3 BHK"];
  const [selected, setSelected] = useState("newProjects");

  return (
    <div className=" flex flex-col gap-3  min-h-screen shadow-2xl w-full ">
      <div className="flex items-center justify-between text-xl bg-gray-300 p-4">
        <TitleAtom title={"Filters"} textSizeLarge="xl" textSizeDefault="md" />
        <button className="text-blue-400 hover:text-blue-500 font-bold">
          Reset All
        </button>
      </div>

      <div className="flex items-center justify-between  p-4">
        <TitleAtom title={"Budget"} textSizeLarge="xl" textSizeDefault="md" />
        <p className="text-blue-400  font-bold">$400</p>
      </div>

      <div className="flex flex-col p-4 gap-2">
        <div className="flex items-center justify-between  ">
          <TitleAtom title={"BHK"} textSizeLarge="xl" textSizeDefault="md" />
          <p className="text-blue-400  font-bold">None</p>
        </div>
        <div className="flex gap-2">
          {features.map((f, index) => (
            <FeatureElement
              key={index}
              text={f}
              bg="gray-300"
              paddingX={3}
              paddingY={2}
              textColor="gray-500"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col p-4 gap-2">
        <div className="flex items-center justify-between  ">
          <TitleAtom title={"BHK"} textSizeLarge="xl" textSizeDefault="md" />
          <p className="text-blue-400  font-bold">None</p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2  bg-gray-200 w-fit p-1 rounded-lg">
            <input
              type="radio"
              value="newProjects"
              checked={selected === "newProjects"}
              onChange={(e) => setSelected(e.target.value)}
            />
            New Projects
          </label>
          <label className="flex items-center gap-2 bg-gray-200 w-fit p-1 rounded-lg">
            <input
              type="radio"
              value="resaled"
              checked={selected === "resaled"}
              onChange={(e) => setSelected(e.target.value)}
            />
            Resaled Projects
          </label>
        </div>
      </div>
    </div>
  );
};

export default SideBarFilter;
