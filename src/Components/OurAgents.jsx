import React from "react";
import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import AgentsCards from "./MainComponents/OurAgents/AgentsCards";
import ScrollAnimation from "../Animation/ScrollAnimation";
// import AgentsCards from "./MainComponents/AgentsCards";

const OurAgents = () => {
  return (
    <div className="grid grid-cols-1 mt-20">
      <div className="flex flex-col items-center">
        <ScrollAnimation>
          <TitleAtom title={"Meet Our Agents"} />
        </ScrollAnimation>
        <ScrollAnimation>
          <ParagraphDescription
            description={
              "Work with Saudi Arabia's top-rated real estate professionals"
            }
          />
        </ScrollAnimation>
      </div>
      <ScrollAnimation>
        <AgentsCards />
      </ScrollAnimation>
    </div>
  );
};

export default OurAgents;
