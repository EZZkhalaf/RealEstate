import React from "react";
import AgentCard from "../Molecule/AgentCard";
import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.jpeg";
import person3 from "../../assets/person3.webp";
import person4 from "../../assets/person4.jpg";
import ViewButtonAtom from "../Atoms/ViewButtonAtom";

const AgentsCards = () => {
  const agents = [
    {
      id: 1,
      name: "Fatima Al-Zahra",
      rating: 4.7,
      image: person1, // Replace with actual image path
      locations: ["Al Olaya", "Al Malqa"],
      sales: "156+",
      experience: "5 years",
      specialties: ["First-time Buyers", "Apartments"],
    },
    {
      id: 2,
      name: "Omar Al-Fahad",
      rating: 4.9,
      image: person2,
      locations: ["Al Nakheel", "Al Yasmin"],
      sales: "220+",
      experience: "8 years",
      specialties: ["Luxury Villas", "Compounds"],
    },
    {
      id: 3,
      name: "Layla Al-Harbi",
      rating: 4.8,
      image: person3,
      locations: ["Al Malqa", "Al Rawdah"],
      sales: "180+",
      experience: "6 years",
      specialties: ["Family Homes", "Garden Villas"],
    },
    {
      id: 4,
      name: "Abdullah Al-Saud",
      rating: 4.6,
      image: person4,
      locations: ["Al Sulaymaniyah", "Al Olaya"],
      sales: "140+",
      experience: "4 years",
      specialties: ["Commercial Properties", "Apartments"],
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 w-full mt-10 gap-6">
        {agents.map((a) => (
          <AgentCard agent={a} />
        ))}
      </div>
      <div className="mt-8">
        <ViewButtonAtom
          title={"View All Agents"}
          navigateTo={"any url"}
          color={"#FFFFFF"}
          hoverColor={"#0B3557"}
          textColor={"#0B3557"}
          hoverTextColor={"#FFFFFF"}
        />
      </div>
    </div>
  );
};

export default AgentsCards;
