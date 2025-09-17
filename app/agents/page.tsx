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
import { Agent } from "@/Interface/AgentInterface";
import { getStaticAgents } from "@/API/AgnetsApi";

export interface LocationInterface {
  region: string;
  cities?: string[];
}

export default function Agents() {
  const [name, setName] = useState("");

  const [currentPage, onPageChange] = useState<number>(1);
  let totalPages = 10;

  const saudiLocations: LocationInterface[] = [
    { region: "All Regions", cities: [] },
    { region: "Riyadh", cities: ["Riyadh"] },
    { region: "Makkah", cities: ["Jeddah", "Makkah", "Taif"] },
    { region: "Madinah", cities: ["Madinah", "Yanbu"] },
    { region: "Qassim", cities: ["Buraidah", "Unaizah"] },
    {
      region: "Eastern Province (Ash Sharqiyah)",
      cities: ["Dammam", "Khobar", "Dhahran", "Al Ahsa"],
    },
    { region: "Asir", cities: ["Abha", "Khamis Mushait"] },
    { region: "Tabuk", cities: ["Tabuk"] },
    { region: "Hail", cities: ["Hail"] },
    {
      region: "Northern Borders (Al Hudud ash Shamaliyah)",
      cities: ["Arar", "Rafha"],
    },
    { region: "Jizan", cities: ["Jizan"] },
    { region: "Najran", cities: ["Najran"] },
    { region: "Al Bahah", cities: ["Al Bahah"] },
    { region: "Al Jawf", cities: ["Sakaka", "Domat Al Jandal"] },
  ];

  const agentSpecialties: string[] = [
    "All Specialties",
    "Luxury Villas",
    "Family Homes",
    "Penthouses",
    "Townhouses",
    "Commercial Properties",
    "Investment Properties",
    "Beachfront Estates",
    "Smart Homes",
    "Historic & Traditional Homes",
  ];
  const [selectedRegion, setSelectedRegion] = useState<string>(
    saudiLocations[0].region
  );
  const [selectedSprecialty, setSelectedSpecialty] = useState<string>(
    agentSpecialties[0]
  );
  const [selectedCity, setSelectedCity] = useState<string>("");

  const [agentsMock, setAgentsMock] = useState<Agent[]>([]);
  const limit: number = 8;
  const fetchAgents = async () => {
    const response = await getStaticAgents({
      page: currentPage,
      limit,
      region: selectedRegion,
      city: selectedCity,
      name,
      agentSpecialties: selectedSprecialty,
    });
    console.log(response);
    setAgentsMock(response);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [debouncedName, setDebouncedName] = useState(name);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedName(name);
    }, 500); // 500ms debounce (you can adjust)

    return () => {
      clearTimeout(handler); // cleanup on new keystroke
    };
  }, [name]);

  useEffect(() => {
    scrollToTop();
    fetchAgents();
  }, [
    selectedCity,
    selectedRegion,
    currentPage,
    debouncedName,
    selectedSprecialty,
  ]);

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
        <AgentsSearchForm
          location={saudiLocations}
          selectedCity={selectedCity}
          selectedRegion={selectedRegion}
          setSelectedCity={setSelectedCity}
          setSelectedRegion={setSelectedRegion}
          specialties={agentSpecialties}
          selectedSpecialty={selectedSprecialty}
          setSelectedSpecialty={setSelectedSpecialty}
          agentName={name}
          setName={setName}
        />
      </ScrollAnimation>

      <ScrollAnimation delay={1}>
        <AgentsCards
          agents={agentsMock}
          isPage={true}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </ScrollAnimation>
      <Footer />
    </div>
  );
}
