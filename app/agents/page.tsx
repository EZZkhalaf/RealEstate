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
import { Agent, LocationInterface } from "@/Interface/AgentInterface";
import {
  getStaticAgents,
  getStaticLocationsAndSpecialties,
} from "@/API/AgnetsApi";

export default function Agents() {
  const [name, setName] = useState("");

  const [currentPage, onPageChange] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [saudiLocations, setSaudiLocations] = useState<LocationInterface[]>([]);

  const [agentSpecialties, setAgentSpecialties] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedSprecialty, setSelectedSpecialty] = useState<string>("");

  const [selectedCity, setSelectedCity] = useState<string>("");

  const [agentsMock, setAgentsMock] = useState<Agent[]>([]);
  const limit: number = 8;

  const fetchLocationsAndSpecialties = async () => {
    const locationsAndSpecialties = await getStaticLocationsAndSpecialties();
    const specialtiesStrings: string[] =
      locationsAndSpecialties.specialties.blocks.map(
        (block: any) => block.data.text as string
      );
    setAgentSpecialties(specialtiesStrings);
    const locationsCleared1: LocationInterface[] =
      locationsAndSpecialties.locations.map((location: any) => location.item);

    const locationsCleared2 = locationsCleared1.map(
      ({ id, region, cities }) => ({
        id,
        region,
        cities: cities?.blocks?.map((block: any) => block.data.text) || [],
      })
    );
    setSaudiLocations(locationsCleared2);
  };
  const fetchAgents = async () => {
    const response = await getStaticAgents({
      page: currentPage,
      limit,
      region: selectedRegion,
      city: selectedCity,
      name: name,
      agentSpecialties: selectedSprecialty,
    });
    setAgentsMock(response?.response);
    setTotalPages(response?.pagination?.totalPages as number);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [debouncedName, setDebouncedName] = useState(name);

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
  useEffect(() => {
    fetchLocationsAndSpecialties();
  }, []);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedName(name);
    }, 500); // 500ms debounce (you can adjust)

    return () => {
      clearTimeout(handler); // cleanup on new keystroke
    };
  }, [name]);

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
