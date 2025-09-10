import React, { useState } from "react";
import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import AgentsCards from "./MainComponents/OurAgents/AgentsCards";
import ScrollAnimation from "../Animation/ScrollAnimation";
import MockAgents from "../MockData/MockAgents.json";
import GrayLine from "./Atoms/GrayLine";
const OurAgents = () => {
  const [agentsMock, setAgentsMock] = useState(MockAgents);
  const agents = agentsMock.slice(0, 4);
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
          <GrayLine />
        </ScrollAnimation>
      </div>
      <ScrollAnimation>
        <AgentsCards agents={agents} />
      </ScrollAnimation>
    </div>
  );
};

export default OurAgents;
