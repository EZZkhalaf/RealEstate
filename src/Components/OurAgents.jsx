import React from "react";
import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import AgentsCards from "./MainComponents/AgentsCards";

const OurAgents = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <TitleAtom title={"Meet Our Agents"} />
      <ParagraphDescription
        description={
          "Work with Saudi Arabia's top-rated real estate professionals"
        }
      />
      <AgentsCards />
    </div>
  );
};

export default OurAgents;
