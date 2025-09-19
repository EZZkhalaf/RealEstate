"use client";
import React, { useEffect, useState } from "react";
import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import AgentsCards from "../app/agents/Components/AgentsCards";
import ScrollAnimation from "../Animation/ScrollAnimation";
// import MockAgents from "../MockData/MockAgents.json";
import GrayLine from "./Atoms/GrayLine";
import { getStaticFeaturedAgents } from "@/API/AgnetsApi";
// import { Agent } from "../Pages/Agents";
const OurAgents = () => {
  const [agentsMock, setAgentsMock] = useState<any[]>([]);

  const fetchAgents = async () => {
    const response = await getStaticFeaturedAgents();
    setAgentsMock(response);
  };
  useEffect(() => {
    fetchAgents();
  }, []);
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
        <AgentsCards agents={agentsMock} />
      </ScrollAnimation>
    </div>
  );
};

export default OurAgents;
