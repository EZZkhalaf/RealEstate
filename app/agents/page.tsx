"use client";

import ScrollAnimation from "@/Animation/ScrollAnimation";
import GrayLine from "@/Components/Atoms/GrayLine";
import ParagraphDescription from "@/Components/Atoms/ParagraphDescription";
import TitleAtom from "@/Components/Atoms/TitleAtom";
import Footer from "@/Components/Footer";
import AgentsSearchForm from "@/Components/MainComponents/AgentsPage/AgentsSearchForm";
import AgentsCards from "@/Components/MainComponents/OurAgents/AgentsCards";
import { useEffect, useState } from "react";
import MockAgents from "../../MockData/MockAgents.json";

export interface Agent {
  id: number;
  name: string;
  rating: number;
  locations: string[];
  image: string;
  sales: string;
  experience: string;
  specialties: string[];
}
export default function Agents() {
  const regions: string[] = ["r1", "r2", "r3", "r4", "r5"];
  const [agentsMock, setAgentsMock] = useState<Agent[]>(MockAgents);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="mt-25 ">
      <div className="flex flex-col  items-start mb-5 px-20">
        <ScrollAnimation type="fade-left">
          <TitleAtom title={"Estate Agents"} />
        </ScrollAnimation>
        <ScrollAnimation type="fade-left" delay={0.5}>
          <ParagraphDescription
            description={`search for the agent by name or region or state.`}
          />
        </ScrollAnimation>
      </div>
      <ScrollAnimation>
        <GrayLine width={"w-full"} />
      </ScrollAnimation>

      <ScrollAnimation delay={0.5}>
        <AgentsSearchForm regions={regions} />
      </ScrollAnimation>

      <ScrollAnimation delay={1}>
        <AgentsCards agents={agentsMock} isPage={true} />
      </ScrollAnimation>
      <Footer />
    </div>
  );
}
