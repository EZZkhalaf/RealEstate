import React, { useEffect, useState } from "react";
import TitleAtom from "../Components/Atoms/TitleAtom";
import ParagraphDescription from "../Components/Atoms/ParagraphDescription";
import InputGray from "../Components/Atoms/InputGray";
import ListSelect from "../Components/Atoms/ListSelect";
import AgentsSearchForm from "../Components/MainComponents/AgentsPage/AgentsSearchForm";
import AgentsCards from "../Components/MainComponents/OurAgents/AgentsCards";
import MockAgents from "../MockData/MockAgents.json";
import ScrollAnimation from "../Animation/ScrollAnimation";
import Footer from "../Components/Footer";
import GrayLine from "../Components/Atoms/GrayLine";
const Agents = () => {
  const regions = ["r1", "r2", "r3", "r4", "r5"];
  const [agentsMock, setAgentsMock] = useState(MockAgents);

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
        <GrayLine />
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
};

export default Agents;
