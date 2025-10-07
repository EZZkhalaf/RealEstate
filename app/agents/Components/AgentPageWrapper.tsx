// "use client";
// import ScrollAnimation from "@/Animation/ScrollAnimation";
// import GrayLine from "@/Components/Atoms/GrayLine";
// import ParagraphDescription from "@/Components/Atoms/ParagraphDescription";
// import TitleAtom from "@/Components/Atoms/TitleAtom";
// import AgentsSearchForm from "@/app/agents/Components/AgentsSearchForm";
// import AgentsCards from "@/app/agents/Components/AgentsCards";
// import { useEffect, useState } from "react";
// import { LocationInterface } from "@/Interface/AgentInterface";
// import { getStaticAgents } from "@/API/AgnetsApi";
// import { AgentInterface } from "@/Interface/AgentInterface";

// interface AgentPageWrapperProps {
//   locationsAndAreas: LocationInterface[];
// }
// export default function AgentPageWrapper({
//   locationsAndAreas,
// }: AgentPageWrapperProps) {
//   const [saudiLocations, setSaudiLocations] = useState<LocationInterface[]>(
//     locationsAndAreas?.map(({ id, name, cities }) => ({
//       id,
//       name,
//       cities: cities?.map((city: any) => city.name) || [],
//     }))
//   );

//   // useEffect(() => {
//   //   const locationsCleared2: LocationInterface[] = locationsAndAreas?.map(
//   //     ({ id, name, cities }) => ({
//   //       id,
//   //       name,
//   //       cities: cities?.map((city: any) => city.name) || [],
//   //     })
//   //   );
//   //   setSaudiLocations(locationsCleared2);
//   // }, []);

//   const [name, setName] = useState<string>("");
//   const [debouncedName, setDebouncedName] = useState(name);
//   const [currentPage, onPageChange] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(0);
//   const [selectedRegion, setSelectedRegion] = useState<string>("");
//   // const [selectedSprecialty, setSelectedSpecialty] = useState<string>("");

//   const [selectedCity, setSelectedCity] = useState<string>("");

//   const [agentsMock, setAgentsMock] = useState<AgentInterface[]>([]);
//   const limit: number = 8;

//   const fetchAgents = async () => {
//     const response: any = await getStaticAgents({
//       page: currentPage,
//       limit,
//       city: selectedCity,
//       name,
//     });
//     setAgentsMock(response?.response || []);
//     setTotalPages((response.pagination?.totalPages as number) || 1);
//   };
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     scrollToTop();
//     fetchAgents();
//   }, [selectedCity, selectedRegion, currentPage, debouncedName]);
//   useEffect(() => {
//     onPageChange(1);
//   }, [debouncedName, selectedCity, selectedRegion]);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedName(name);
//     }, 500); // 500ms debounce

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [name]);

//   return (
//     <div className="flex flex-col items-center mt-25 w-full ">
//       <div className="w-full max-w-7xl flex flex-col">
//         <div className="flex flex-col items-center w-full max-w-7xl mb-5">
//           <ScrollAnimation type="fade-left">
//             <TitleAtom title={"Estate Agents"} />
//           </ScrollAnimation>
//           <ScrollAnimation type="fade-left" delay={0.5}>
//             <ParagraphDescription
//               description={`search for the agent by name or region or state.`}
//             />
//           </ScrollAnimation>
//         </div>
//         <ScrollAnimation>
//           <GrayLine width={"w-full"} />
//         </ScrollAnimation>

//         <ScrollAnimation delay={0.5}>
//           <AgentsSearchForm
//             location={saudiLocations}
//             selectedCity={selectedCity}
//             selectedRegion={selectedRegion}
//             setSelectedCity={setSelectedCity}
//             setSelectedRegion={setSelectedRegion}
//             agentName={name}
//             setName={setName}
//           />
//         </ScrollAnimation>

//         <ScrollAnimation delay={1}>
//           <AgentsCards
//             agents={agentsMock}
//             isPage={true}
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={onPageChange}
//           />
//         </ScrollAnimation>
//       </div>
//     </div>
//   );
// }

"use client";
import ScrollAnimation from "@/Animation/ScrollAnimation";
import GrayLine from "@/Components/Atoms/GrayLine";
import ParagraphDescription from "@/Components/Atoms/ParagraphDescription";
import TitleAtom from "@/Components/Atoms/TitleAtom";
import AgentsSearchForm from "@/app/agents/Components/AgentsSearchForm";
import AgentsCards from "@/app/agents/Components/AgentsCards";
import { useEffect, useState } from "react";
import { LocationInterface } from "@/Interface/AgentInterface";
import { getStaticAgents } from "@/API/AgnetsApi";
import { AgentInterface } from "@/Interface/AgentInterface";
import { useQuery } from "@tanstack/react-query";

interface AgentPageWrapperProps {
  locationsAndAreas: LocationInterface[];
}
export default function AgentPageWrapper({
  locationsAndAreas,
}: AgentPageWrapperProps) {
  const [saudiLocations, setSaudiLocations] = useState<LocationInterface[]>(
    locationsAndAreas?.map(({ id, name, cities }) => ({
      id,
      name,
      cities: cities?.map((city: any) => city.name) || [],
    }))
  );
  const [name, setName] = useState<string>("");
  const [debouncedName, setDebouncedName] = useState(name);
  const [currentPage, onPageChange] = useState<number>(1);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const limit: number = 8;

  const { data, isLoading, isError } = useQuery({
    queryKey: [
      "agentsMock",
      selectedCity,
      selectedRegion,
      currentPage,
      debouncedName,
    ],
    queryFn: async () => {
      const response: any = await getStaticAgents({
        page: currentPage,
        limit,
        city: selectedCity,
        name: debouncedName, // use the debounced name for actual fetching
      });
      return response;
    },
  });

  const agentsMock: AgentInterface[] = data?.response ?? [];
  const totalPages: number = data?.pagination?.totalPages ?? 1;

  useEffect(() => {
    onPageChange(1);
  }, [debouncedName, selectedCity, selectedRegion]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedName(name);
    }, 500); // 500ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [name]);

  return (
    <div className="flex flex-col items-center mt-25 w-full ">
      <div className="w-full max-w-7xl flex flex-col">
        <div className="flex flex-col items-center w-full max-w-7xl mb-5">
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
      </div>
    </div>
  );
}
